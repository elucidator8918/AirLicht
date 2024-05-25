import React from 'react';
import PropTypes from 'prop-types';
import Viewer from './Viewer';
import "./App_1.css"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.wrapper = null;
        this.state = {
            camera: null,
            selectedIds: []
        };
    }

    onInputChange = (ev) => {
        const val = ev.target.value.trim();
        const ids = val.split(',')
                       .map(e => e.trim())  
                       .filter(e => e.length > 0 && !isNaN(e))  
                       .map(e => parseInt(e, 10)); 

        this.setState({ selectedIds: ids });
    }

    render() {
        const { token, urn } = this.props;
        return (
            <div className="app bg-gray-100 p-4">
                <div className="relative w-full h-96">
                    <Viewer
                        runtime={{ accessToken: token }}
                        urn={urn}
                        selectedIds={this.state.selectedIds}
                        onCameraChange={({ viewer, camera }) => this.setState({ camera: camera.getWorldPosition() })}
                        onSelectionChange={({ viewer, ids }) => this.setState({ selectedIds: ids })}
                        ref={ref => this.wrapper = ref}
                    />
                </div>
                <div className="mt-4 text-white flex justify-between items-start">
                    <div>
                        Camera Positions:
                        {this.state.camera &&
                            <div className="camera-positions-table">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>X:</td>
                                            <td>{this.state.camera.x.toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                            <td>Y:</td>
                                            <td>{this.state.camera.y.toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                            <td>Z:</td>
                                            <td>{this.state.camera.z.toFixed(2)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        }
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="mb-2">
                            <label htmlFor="selectedIds" className="mr-2">Selected IDs:</label>
                            <input 
                                id="selectedIds"
                                type="text" 
                                value={this.state.selectedIds.join(',')} 
                                onChange={this.onInputChange} 
                                className="border border-black-300 rounded-md p-2 text-black"
                            />
                        </div>
                        <button 
                            onClick={() => this.wrapper.viewer.autocam.goHome()} 
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Reset View
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    token: PropTypes.string.isRequired,
    urn: PropTypes.string.isRequired
};

export default App;
