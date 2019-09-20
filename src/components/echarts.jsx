/**
 *  折线图，柱形图
 */

import React, { useEffect } from 'react'
import echarts from 'echarts';

const Echarts = props => {
  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chartmain'));
    // window.onresize = myChart.resize;  // 适应屏幕放大缩小32
    // 绘制图表
    myChart.setOption({
      grid: {
        top: '25%',//距上边距

        // left: '25%',//距离左边距

        // right: '25%',//距离右边距

        // bottom: '25%',//距离下边距

      },
      title: {
        text: 'XX同学的日周考统计图',
        subtext: '仅供参考',
        textStyle: {
          color: '#477A74',
          fontWeight: 'normal'
        }
      },
      tooltip: {
        trigger: 'axis',
        position: 'top',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: 'rgb(183, 220, 57)'
          }
        }
      },
      legend: {
        y: '25px',
        data: ['技能', '理论'],
      },
      toolbox: {
        show: true,
        y: '20px',
        itemSize: 11,
        feature: {
          // dataZoom: {
          //   yAxisIndex: 'none'
          // },
          // dataView: { readOnly: false },
          magicType: { type: ['line', 'bar'] },
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} °C'
        }
      },
      series: [
        {
          name: '技能',
          type: 'line',
          data: [11, 11, 15, 13, 12, 13, 10],
          markPoint: {
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ]
          },
          markLine: {
            data: [
              { type: 'average', name: '平均值' }
            ]
          }
        },
        {
          name: '理论',
          type: 'line',
          color: 'rgb(183, 220, 57)',
          data: [1, -2, 2, 5, 3, 2, 0],
          markPoint: {
            data: [
              { name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }
            ]
          },
          markLine: {
            data: [
              { type: 'average', name: '平均值' },
              [{
                symbol: 'none',
                x: '90%',
                yAxis: 'max'
              }, {
                symbol: 'circle',
                label: {
                  normal: {
                    position: 'start',
                    formatter: '最大值'
                  }
                },
                type: 'max',
                name: '最高点'
              }]
            ]
          }
        }
      ]
    })
  })

  return (
    <div id="chartmain" className="echarsMap"></div>
  )
}
export default Echarts