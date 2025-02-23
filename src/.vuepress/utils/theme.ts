import { generate } from '@ant-design/colors'


/**
 * 获取当前主题颜色
 * @returns {string} 主题颜色
 */
export function getThemeColor(): string {
  const rootStyles = window.getComputedStyle(document.documentElement)
  return rootStyles.getPropertyValue('--vp-c-accent-hover')
}

/**
 * 根据颜色获取色系
 *
 * @param {string} color #1890ff
 * @return {string[]} ['#E6F7FF', '#BAE7FF', '#91D5FF', ''#69C0FF', '#40A9FF', '#1890FF', '#096DD9', '#0050B3', '#003A8C', '#002766']
 */
export function getGenerateColors(color: string): string[] {
  return generate(color)
}


/**
 * 将CSS变量添加到HTML文档中
 * @param {{ [key: string]: string }} themeColors 
 */
export function addCssVarsToHtml(themeColors: { [key: string]: string }): void {
  const $root: HTMLElement = document.documentElement;
  for (const [key, value] of Object.entries(themeColors)) {
    if (key.startsWith('--')) { // 确保CSS变量名以 '--' 开头
      $root.style.setProperty(key, value);
    } else {
      console.warn(`Invalid CSS variable name: ${key}. CSS variable names must start with '--'.`);
    }
  }
}
