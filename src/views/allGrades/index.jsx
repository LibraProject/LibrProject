/**
 *  所有成绩
 */
import React, { useState, useEffect } from 'react'
import echarts from 'echarts';
import '@/css/index.css'

function allGrades() {
  let [flag, setflag] = useState(false)
  let [ind,setInd] = useState(0)
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
              {console.log(ind)}
              {
                classArr.map((el,i) => <span key={el} className={ind==i?'listActive':''} onClick={()=>{setInd(i)}}>{el}</span>)
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


      </main>
    </div>
  )

}
export default allGrades