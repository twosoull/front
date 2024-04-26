import React, { Component } from 'react';

class IframeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
      runtimeError: null,
      isLoaded: false // 1초 후에 리턴 태그를 보여주기 위한 상태
    };
  }

  componentDidMount() {
    // 1초 후에 isLoaded 상태를 true로 변경하여 리턴 태그를 보여줍니다.
    setTimeout(() => {
      this.setState({ isLoaded: true });
    }, 100);
  }

  handleLoad = () => {
    this.setState({ isError: false });
  }

  handleError = (error) => {
    this.setState({ isError: true, runtimeError: error.message });
  }

  render() {
    const { isError, runtimeError, isLoaded } = this.state;
    const { videoUrl, title } = this.props;

    return (
      <div>
        {isError && <div>오류가 발생했습니다: {runtimeError}</div>}
        {isLoaded && ( // isLoaded 상태가 true이면 리턴 태그를 표시합니다.
          <iframe
            src={this.props.videoUrl}
            title={title}
            style={{ visibility: isError ? 'hidden' : 'visible' }}
            onLoad={this.handleLoad}
            onError={this.handleError}
          ></iframe>
        )}
      </div>
    );
  }
}

export default IframeComponent;
