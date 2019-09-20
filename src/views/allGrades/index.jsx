/**
 *  所有成绩
 */
import React, { useState, useEffect } from 'react'
import echarts from 'echarts';
import '@/css/index.css'
import '@/css/min.css'

function allGrades() {
  let [flag, setflag] = useState(false)
  let [ind, setInd] = useState(0)
  let [classArr] = useState(['1701E', '1701C', '1705D', '1706D', '1707D', '1708D', '1709D'])
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

  return (
    <div className="allGradeswrap">
      <header className="allGradeshead">
        <div>
          重点关注学生考试成绩统计图
        </div>
      </header>
      <main>

        <div className="allGradesmain">

          <div className="allGradesnav">
            <span className="allGradesclass">切换班级：</span>
            <div className="allGradesclassList">
              {
                classArr.map((el, i) => <span key={el} className={ind == i ? 'listActive' : ''} onClick={() => { setInd(i) }}>{el}</span>)
              }
              <span className="allGradesaddClass">创建班级+</span>
            </div>
          </div>

          <div className="allGradesbm">
            <span className="allGradesmingdan">名单：</span>

            <div className="allGradesclassList">
              <span>张三</span>，<span>王立</span>，<span>王强</span>
              <span className="allGradesaddClass">（3 人）</span>
            </div>

            <div className="allGradespost">
              <div className="allGradespos">
                <div></div>
                <div className="allGradesposwhite"></div>
                <div className="circle"></div>
              </div>
              <div className="allGradesTitle"><span>柱形图</span> / <span>线图</span></div>
            </div>
          </div>

        </div>
        <div className="map">
          <div id="main" style={{ width: '100%', height: '500px' }}></div>
        </div>

      </main>
    </div>
  )

}
export default allGrades