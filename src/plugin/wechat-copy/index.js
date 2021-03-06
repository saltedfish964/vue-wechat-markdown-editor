import Clipboard from 'clipboard';

export default function themeStyle() {
  return {
    actions: [
      {
        title: '复制排版',
        icon: '<svg t="1619772085945" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2041" width="200" height="200"><path d="M241.6 855.3h387.9c12.5 0 22.7-10.1 22.7-22.6 0-12.5-10.2-22.6-22.7-22.6H241.6c-12.5 0-22.7 10.2-22.7 22.6 0 12.5 10.1 22.6 22.7 22.6-0.1 0 0 0 0 0z m0-491.8h387.9c12.5 0 22.7-10.1 22.7-22.6 0-12.6-10.2-22.7-22.7-22.7H241.6c-12.5-0.4-23 9.5-23.3 22-0.4 12.5 9.5 23 22 23.3h1.3z m0 163.9h387.9c12.5 0 22.7-10.1 22.7-22.6 0-12.6-10.2-22.7-22.7-22.7H241.6c-12.5 0-22.6 10.1-22.6 22.6 0 12.6 10.1 22.7 22.6 22.7z m0 164h387.9c12.5 0 22.7-10.2 22.7-22.6 0-12.5-10.2-22.6-22.7-22.6H241.6c-12.5 0-22.7 10-22.7 22.6 0 12.5 10.2 22.6 22.7 22.6zM910.8 0H287.1c-29.5 0-53.4 23.9-53.5 53.4v93H93.5c-18.6 0-33.7 15.1-33.7 33.7v810c0 18.6 15.2 33.8 33.7 33.8h684c18.6 0 33.7-15.2 33.7-33.8V845.6h99.5c29.5-0.1 53.3-23.9 53.4-53.4V53.4C964.2 23.9 940.3 0 910.8 0zM766 978.7H105v-787h661v787z m152.9-186.5c-0.1 4.5-3.7 8.1-8.1 8.2h-99.5V180.2c0-18.6-15.1-33.7-33.7-33.7H278.9v-93c0-4.4 3.8-8.1 8.2-8.1h623.7c4.3 0 8.1 3.7 8.1 8.1v738.7z" fill="#040000" p-id="2042"></path></svg>',
        handler: {
          type: 'action',
          click(item) {
            const copyBtnEle = item.root.getElementsByClassName('bytemd-tippy')[14];
            const markdownBodyEle = item.root.getElementsByClassName('markdown-body')[0];
            copyBtnEle.id = 'copy-btn';
            const clipboard = new Clipboard('#copy-btn', {
              target() {
                return markdownBodyEle;
              },
            });

            clipboard.on('success', (e) => {
              console.log('复制成功');

              e.clearSelection();
            });

            clipboard.on('error', () => {
              console.log('复制失败');
            });
          },
        },
      },
    ],
  };
}
