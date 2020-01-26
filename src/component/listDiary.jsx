import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addDiary } from '../redux/action';

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

const ListDiarys = connect(mapStateToProps)(ListDiary)

export default ListDiarys