/**
 *  添加分析和解决方案
 */

import React, { useState } from 'react'
import { connect } from 'dva'

const Analyze = props => {
    const [time, setTime] = useState("2019-09-20")
    return (
        <div className="analyze" style={{ display: props.mark ? 'block' : 'none' }}>
            <div className="mask">
                <h3>添加分析--XX同学</h3>
                <ul>
                    <li>
                        <input type="date" value={time} onChange={(e) => {
                            setTime(e.target.value)
                        }} />
                        {/* <input type="text" placeholder="默认当前日期"/> */}
                        <i>昨天</i>
                    </li>
                    <li>
                        <span>分析</span>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </li>
                    <li>
                        <span>解决方案</span>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </li>
                </ul>
                <div className="btns">
                    <button onClick={() => {
                        props.setMark(false)
                    }}>取消</button>
                    <button onClick={() => {
                        props.setMark(false)
                    }}>确定</button>
                </div>
            </div>
        </div>
    )
}
export default connect(state => {
    // console.log(state.example.mark)
    return {
        mark: state.example.mark
    }
}, dispatch => {
    return {
        setMark(payload) {
            dispatch({ type: 'example/setMark', payload })
        }
    }
})(Analyze)