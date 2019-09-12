import echarts from 'echarts'
import { echartsThemeLight } from 'theme/light/echartsThemeLight'
export * from './light/muiThemeLight'

export const registerEchartsThemes = () => {
  echarts.registerTheme('echartsThemeLight', echartsThemeLight)
}
