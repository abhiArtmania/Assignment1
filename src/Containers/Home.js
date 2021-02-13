import React, { Component } from 'react';
import { connect } from 'react-redux'
import Header from './Header'
import { fetchData, updateList } from '../Actions/home'
import { bindActionCreators } from 'redux'
import DragDropComponent from '../Components/DragDropComponent'
import { homeActionType } from '../Constants'

const mapStateToProps = (state) => {
  const tableData = JSON.parse(state.home.tableData)
  return {
    dragTableData:tableData.dragTableData,
    dropTableData: tableData.dropTableData
  }
}

class Home extends Component {
  constructor(props){
    super()
    this.state={

    }
  }

  render() {
    const { dragTableData, dropTableData } = this.props
    return (
      <div className="home">
        <Header/>
        <div className='wrapper'>
          <DragDropComponent
            dropTableData={dropTableData}
            dragTableData={dragTableData}
            updateData={(str)=>{
              this.props.dispatch({
                type:homeActionType.UPDATE_DATA,
                payload:str
              })
            }}
          />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
