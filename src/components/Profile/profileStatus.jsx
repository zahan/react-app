import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: true
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <p>Status: <span>{this.props.status}</span></p>
                </div>}
                {this.state.editMode &&
                <div>
                    <input value={this.props.status} />
                </div>}
            </div>
        )
    }
};

export default ProfileStatus;