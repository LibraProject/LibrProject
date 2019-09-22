/**
 *  重点学生可视化展示
 */

import React from 'react'
import { NavLink } from 'react-router-dom'
import EchartsView from '@/components/echarts'
import { connect } from 'dva'
import Grade from '@/components/grade'
import Analyze from '@/components/analyze'
import '@/css/index.css'
import '@/css/min.css'

const StudentView = props => {
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
          <EchartsView />
          <div className="mapFoot">
            <div className="mapLeft">
              <span onClick={() => {
                props.setFlag(true)
              }}>添加成绩+</span>
              <span onClick={() => {
                props.setMark(true)
              }}>添加分析和解决方案+</span>
            </div>
            <div className="mapRight">
              <span>
                  <NavLink to="/allGrades">查看和编辑该生所有成绩</NavLink>
              </span>
              <span>
                  <NavLink to="/allGrades">院长视角</NavLink>
              </span>
            </div>
          </div>
        </div>

        <Grade />
        <Analyze />
      </main>
    </div>
  )
}
export default connect(state => {
  return {
    ...state
  }
}, dispatch => {
  return {
    setFlag(payload) {
      dispatch({ type: 'example/setFlag', payload })
    },
    setMark(payload) {
      dispatch({ type: 'example/setMark', payload })
    }
  }
})(StudentView)