/**
 *  重点学生可视化展示
 */
import React, { useState, useEffect } from 'react';
import echarts from "echarts";
import '@/css/min.css'

const StudentView = (props) => {

  useEffect(() => {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main'));
      // 绘制图表
      myChart.setOption({
        title: {
          text: 'XX同学的日周考统计图',
          subtext: '仅供参考'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['技能', '理论']
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: { readOnly: false },
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
  let [arr] = useState(['1703C', '1703B', '1703E'])
  let [Ishight,setIshight] = useState('1703C')
  
  return (
    <div className="studentviewWrap">
      <div className="studentviewTitle">重点学生可视化展示</div>
      <div className="tabclass">
        <div className="tabclasstxt">切换班级：</div>
        <div className="tavClassMiddle">
          {arr.map(ele => <div key={ele} className={ele == Ishight ? 'tavClassMiddleActive' : ''} onClick={() => { setIshight({ Ishight: ele }) }}>{ele}</div>)}
          <div>+添加班级</div>
        </div>
        <div className="tabclassschedule"><span className="posbutton">柱形图/线图</span></div>
      </div>
      <div id="main" style={{ width: '100%', height: '500px' }}></div>
    </div>
  )
}

export default StudentView;
