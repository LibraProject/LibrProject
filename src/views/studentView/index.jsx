/**
 *  重点学生可视化展示
 */

import React, { useState, useEffect } from 'react'
import echarts from 'echarts';
import '@/css/index.css'

const StudentView = props => {
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
    <div className="box">
      <header className="head">重点关注学生考试成绩统计图</header>
      <main>
        <div className="nav">
          <div className="navLeft">
            <span>切换班级：</span>
            <span className="span spanActive">1703C</span>
            <span className="span">1703E</span>
            <span className="addClass">创建班级+</span>
          </div>

          <div className="navRight">
            <span className="solid">柱状图</span>
            <span>/</span>
            <span>线图</span>
          </div>
        </div>

        <div className="search">
          <span>添加学生：</span>
          <input type="text" placeholder="输入姓名" />
          <input type="text" placeholder='末位次数' />
          <input type="text" placeholder='结对子，帮扶对象' />
          <button>添加</button>
        </div>

        <div className="map">
          <div id="main" style={{ width: '100%', height: '500px' }}></div>
          <div className="mapFoot">
            <div className="mapLeft">
              <span>添加成绩+</span>
              <span>添加分析和解决方案+</span>
            </div>
            <div className="mapRight">
              <span>查看和编辑该生所有成绩</span>
              <span>院长视角</span>
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}
export default StudentView