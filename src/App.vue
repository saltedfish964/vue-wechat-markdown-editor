<template>
  <div id="app">
    <Editor
      :value="value"
      :plugins="plugins"
      @change="handleChange"
      :locale="EditorLanguage"
      class="editor"
    ></Editor>
  </div>
</template>

<script>
import { Editor } from '@bytemd/vue';
import EditorLanguage from 'bytemd/lib/locales/zh_Hans.json';
import gfm from '@bytemd/plugin-gfm';
import GfmLanguage from '@bytemd/plugin-gfm/lib/locales/zh_Hans.json';
import highlight from '@bytemd/plugin-highlight';
import frontmatter from '@bytemd/plugin-frontmatter';
import footnotes from '@bytemd/plugin-footnotes';
import gemoji from '@bytemd/plugin-gemoji';
import highlightStyle from './plugin/highlightStyle/index';
import themeStyle from './plugin/themes/index';
import wechatCopy from './plugin/wechat-copy/index';

export default {
  name: 'App',
  components: { Editor },
  data() {
    return {
      value: '',
      plugins: [
        gfm({
          locale: GfmLanguage,
        }),
        frontmatter(),
        footnotes(),
        gemoji(),
        highlight(),
        themeStyle(),
        highlightStyle(),
        wechatCopy(),
      ],
      EditorLanguage,
    };
  },
  methods: {
    handleChange(v) {
      this.value = v;
    },
  },
};
</script>

<style scoped>
.editor >>> .bytemd {
  height: 100vh;
}

.editor >>> .bytemd-tippy-right:last-child {
  display: none;
}
</style>
