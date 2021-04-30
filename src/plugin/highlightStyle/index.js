import { dump } from 'js-yaml';
import frontmatter from 'front-matter';
import style from './style';

let fmObject = {};

export default function highlightStyle() {
  return {
    viewerEffect({ file }) {
      fmObject = file?.frontmatter || {};
      const hl = file?.frontmatter?.highlight;
      const $style = document.createElement('style');
      $style.innerHTML = style[hl] ?? style['a11y-light'];
      document.head.appendChild($style);
      return () => {
        $style.remove();
      };
    },
    actions: [
      {
        title: '代码高亮', // 标题
        icon: '<?xml version="1.0" encoding="UTF-8"?><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M6 44L6 25H12V17H36V25H42V44H6Z" fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round"/><path d="M17 17V8L31 4V17" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>', // 显示在工具栏上的icon,
        handler: {
          type: 'dropdown',
          actions: Object.keys(style).map((styleName) => ({
            title: styleName,
            handler: {
              type: 'action',
              click({ editor }) { // 点击事件，会返回一个编辑对象editor
                // editor.getValue() 获取当前编辑器的内容
                // editor.setValue() 设置当前编辑器的内容
                fmObject.highlight = styleName; // 改高亮 fmObject = {highlight: styleName}
                const { body } = frontmatter(editor.getValue()); // 通过frontmatter获取md的主体
                const head = `---\n${dump(fmObject)}---\n\n`; // dump方法可以把fmObject解析成"highlight: xxx"
                editor.setValue(head + body); // 新的head加上md主体body
                editor.focus();
              },
            },
          })),
        },
      },
    ],
  };
}
