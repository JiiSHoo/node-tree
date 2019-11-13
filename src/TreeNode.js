import React from 'react';
import './TreeNode.css'

class TreeNode extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            nodeCount: 0
        };
        this.addNode = this.addNode.bind(this);
        this.removeNode = this.removeNode.bind(this);
    }

    render()
    {
        var childNodes = [];
        for(var i = 0; i< this.state.nodeCount;i++)
        {
            childNodes.push(<TreeNode nodeId={this.props.nodeId+"."+(i+1)}></TreeNode>);
        }
        return(
            <div className="treenode" id={"TreeNode" + this.props.nodeId}>
                <div>
                    Noodi {this.props.nodeId} <button onClick={this.addNode}>[Lisää]</button>
                </div>
                <div id="nodes">
                        {childNodes}
                </div>
            </div>
        );
    }

    addNode()
    {
        this.setState({nodeCount: this.state.nodeCount+1});
    }
}

export default TreeNode;