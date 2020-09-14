import React, { Component } from 'react';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import { connect } from 'react-redux';
import NoteFormAdd from './NoteFormAdd';
class noteApp extends Component {
  showForm = () => {
    if (this.props.isEdit) {
      return <NoteForm />
    }
  }
  render() {
    return (
      <div >
        <div className="container m-5">
        <div className="row">
        <div className="col-md-12 my-3">
          <h1 className="text-center">App Note Manager</h1>
        </div>
        </div>
          <NoteFormAdd />
          <div className="row">
            <NoteList />
            {
              this.showForm()
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}
export default connect(mapStateToProps)(noteApp)

