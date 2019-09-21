/**
 * 院长视角  
 **/

import React from 'react'

const Deanview = props => {

  return (
    <div className="box">
      <header className="head">重点关注学生考试成绩统计图</header>
      <main>
        <div className="deanNav">
          <div className="navTop">
            <span>切换班级：</span>
            <span className="span spanActive">1703C</span>
            <span className="span">1703E</span>
            <span className="span">1703E</span>
            <span className="span">1703E</span>
            <span className="span">1703E</span>
            <span className="span">1703E</span>
            <span className="span">1703E</span>
            <span className="span">1703E</span>
            <span className="span">1703E</span>
            <span className="span">1703E</span>
            <span className="span">1703E</span>
            <span className="span">1703E</span>
            <span className="span">1703E</span>
            <span className="span">1703E</span>
            <span className="span">1703E</span>
          </div>
          <div className="navBottom">
            <span></span>
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

          </div>
        </div>

      </main>
    </div>
  )
}
export default Deanview