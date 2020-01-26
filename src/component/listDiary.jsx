import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class ListDiary extends Component {

	render() {
		return (
			<div className="card">
				<div className="card-header">
					<h5>
						My Diary
              <div className="float-right">
							<Link to="/editDiary"><span className="fas fa-plus"></span>Add  </Link>
						</div>
					</h5>
				</div>
				<div className="card-body">
					{/* ... */}
				</div>
				<div className="card-footer">
					<div className="float-right">
						<button className="btn btn-danger float-right">Delete</button>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => {

}

const ListDiarys = connect(mapDispatchToProps, mapStateToProps)(ListDiary)

export default ListDiarys