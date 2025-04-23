import { marked } from 'marked';

// 定义自定义扩展
const chartExtension = {
  name: 'chart', // 扩展名称（唯一）
  level: 'block',      // 块级语法
  start(src) { 
    // 返回可能触发该语法的起始位置（优化性能）
    return src.indexOf("'''"); 
  },
  tokenizer(src){
    const match = src.match(/^'''\n?([\s\S]+?)'''/); // 匹配 ''' 包裹的内容
    if (match) {
      return {
        type: 'chart', // 自定义类型
        raw: match[0], // 原始匹配内容
        text: match[1].trim(), // 去掉首尾空格的内容
        selector: `chart`, // 生成唯一 ID
      };
    }
    return false; // 不匹配时返回 false
  },
  renderer(token) {
    // 将标记转换为 HTML
    return `<div class="chart"></div>`; // 自定义渲染为 div
  }
};

marked.use({ extensions: [ chartExtension]}); // 使用自定义扩展