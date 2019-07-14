/* eslint jsx-a11y/no-noninteractive-element-to-interactive-role: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import classNames from 'classnames';
import raf from 'raf';
import style from './demo.css';


class Select extends Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    options: PropTypes.array,
    selectedIndex: PropTypes.number,
    type: PropTypes.string,
    onSelect: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onEsc: PropTypes.func,
  };

  state = {
    active: false,
  };


  componentDidUpdate(prevProps) {
    // const { selectedIndex } = this.props;
    // // smooth scroll to selected option
    // if (prevProps.selectedIndex !== selectedIndex) {
    // //   this.scrollToSelected(120);
    // }
  }
  componentDidMount(){
        
    //console.log(this.props.width)
    const parent = this.refs.father;
    //parent.style.width = this.props.width + "px";
    var aLi = parent.children;  
    console.log(parent, aLi)
    this.drag(parent);	
 }

 drag(obj) {
    obj.onmousedown = function(ev){
        // optional.clickElement = _this.props.clickElement || null;
        // optional.clickElement && optional.clickElement(obj);
        // optional.time = this.props.time || 300;
        // optional.moveStop = this.props.moveStop || null;
        // optional.type = this.props.type||'ease-out';
        var oEvent = ev || event;
        // var disX = oEvent.clientX - obj.offsetLeft;
        // var disY = oEvent.clientY - obj.offsetTop;
        //obj.style.zIndex = zIndex++;
        //console.log(_this.setState);
        //console.log(this);
        //  _this.setState({zIndex:_this.state.zIndex+1});
         //console.log(_this.state.zIndex);
        //  obj.style.zIndex =_this.state.zIndex;
        // clearInterval(obj.timer);
        console.log(ev,'00000000')
    
        obj.onmousemove = function(ev){
            var oEvent = ev || event;
            console.log(ev,'1111111')
            // obj.style.left = oEvent.clientX - disX + "px";
            // obj.style.top  = oEvent.clientY - disY + "px";
        };
        
        document.onmouseup = function(){
            //drag 结束 的 api
            obj.onmousemove = null;
            document.onmouseup = null;
        };
        
        // obj.setCapture && obj.setCapture();
        return false;	
    }
 }


  handleMouseEnter = e => {
    // const { onMouseEnter } = this.props;
    // this.setState({ active: true });
    // onMouseEnter(e);
  };

  handleMouseLeave = () => {
    // this.setState({ active: false });
  };
  onMouseDown = (e) => {
      console.log('onMouseDown',e);
    //   onMouseMove={this.onMouseMove}
  }
  onMouseMove= (e) => {
      console.log('onMouseMove',e)
  }


  render() {
 
    return (
      <div
        className={style.demo}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        我就是来测试的哈。
        <div
            // onMouseDown={this.onMouseDown}
            ref='father'
        >
            <ul>
                {
                    [1,2,3,4,5,6].map((item, index) => (
                        <li key={index} data-ym="1" data-xm={index}>{item}</li>
                    ))
                }
                
            </ul>
                <ul>
                {
                    [1,2,3,4,5,6].map((item, index) => (
                        <li key={index} data-ym="2" data-xm={index}>{item}</li>
                    ))
                }
                
            </ul>
        </div>
       
      </div>
    );
  }
}

export default Select;
