import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState (
            {editMode: true}
        )
    };
    
    deactivateEditMode = () => {
        this.setState (
            {editMode: false}
        )
        this.props.updateUserStatus(this.state.status) 
    };

    onStatusChange = (e) => {
        this.setState (
           { status: e.target.value }
        )
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <p>Status: <span onDoubleClick={this.activateEditMode}>{this.props.status || 'Double click to set your status'}</span></p>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
                    </div>}
            </div>
        )
    }
};

export default ProfileStatus;