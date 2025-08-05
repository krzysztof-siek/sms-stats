export enum ChartTypeEnum {
  Line = 'line',
  Bar = 'bar',
}

export const chartTypeLabels: Record<ChartTypeEnum, string> = {
  [ChartTypeEnum.Line]: 'Liniowy',
  [ChartTypeEnum.Bar]: 'Słupkowy',
};
