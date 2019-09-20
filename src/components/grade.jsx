/**
 *  新添成绩
 */

import React, { useState } from 'react'
import { connect } from 'dva'

const Grade = props => {
    const [time, setTime] = useState("2019-09-20")
    return (
        <div className="deailog" style={{ display: props.flag ? 'block' : 'none' }}>
            <div className="mask">
                <h3>新添成绩--XX同学</h3>
                <ul>
                    <li>
                        <input type="date" value={time} onChange={(e) => {
                            setTime(e.target.value)
                        }} />
                        {/* <input type="text" placeholder="默认当前日期"/> */}
                        <i>昨天</i>
                    </li>
                    <li>
                        <span>技能</span>
                        <input type="text" placeholder="数字" />
                    </li>
                    <li>
                        <span>理论</span>
                        <input type="text" placeholder="0-100之间数字" />
                    </li>
                </ul>
                <div className="btns">
                    <button onClick={() => {
                        props.setFlag(false)
                    }}>取消</button>
                    <button onClick={() => {
                        props.setFlag(false)
                    }}>确定</button>
                </div>
            </div>
        </div>
    )
}
export default connect(state => {
    return {
        flag: state.example.flag
    }
}, dispatch => {
    return {
        setFlag(payload) {
            dispatch({ type: 'example/setFlag', payload })
        }
    }
})(Grade)