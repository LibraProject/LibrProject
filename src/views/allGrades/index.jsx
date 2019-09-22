/**
 *  所有成绩
 */
import React, { useState, useEffect } from 'react'
// import echarts from 'echarts';
import EchartsView from '@/components/echarts'
import '@/css/index.css'
import '@/css/min.css'

function allGrades() {
  let [flag, setflag] = useState(true)
  let [ind, setInd] = useState(0)
  let [LB,setlb] = useState('line')
  let [classArr] = useState(['1701E', '1701C', '1705D', '1706D', '1707D', '1708D', '1709D'])

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
                classArr.map((el, i) => <span key={el} className={ind === i ? 'listActive' : ''} onClick={() => { setInd(i); }}>{el}</span>)
              }
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
                <div className="circle" style={{left:flag?0:'20px'}} onClick={()=>{setflag(!flag);setlb(flag?'bar':'line') }}></div>
              </div>
              <div className="allGradesTitle"><span className={LB==="line"?'allGradesTitleActive':''}>线图</span> / <span className={LB==="bar"?'allGradesTitleActive':''}>柱形图</span></div>
            </div>
          </div>

        </div>
        <div className="map">
          <EchartsView />
        </div>
        <div className="allGradeTxts ">
              <div className="allGradeTxtsItem clearBoth">
                <div className="allGradeTxtsItemLeft">
                  <p>2019-9-21</p>
                  <p>今日分析及解决方案 </p>
                  <p>查看历史记录</p>
                </div>
                <div className="allGradeTxtsItemright ">
                    阿斯顿撒大撒大声地撒大所多撒奥所多撒阿斯顿撒大撒大声地撒大所多撒奥所多撒阿斯顿撒大撒大声地撒大所多撒奥所多撒阿斯顿撒大撒大声地撒大所多撒奥所多撒阿斯顿撒大撒大声地撒大所多撒奥所多撒阿斯顿撒大撒大声地撒大所多撒奥所多撒阿斯顿撒大撒大声地撒大所多撒奥所多撒阿斯顿撒大撒大声地撒大所多撒奥所多撒阿斯顿撒大撒大声地撒大所多撒奥所多撒阿斯顿撒大撒大声地撒大所多撒奥所多撒阿斯顿撒大撒大声地撒大所多撒奥所多撒
                </div>
              </div>
        </div>
      </main>
    </div>
  )

}
export default allGrades