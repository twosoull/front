import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 오류가 발생하면 상태를 업데이트하여 다음 렌더링에서 대체 UI를 표시합니다.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 에러 리포팅 서비스에 에러를 기록할 수 있습니다.
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 사용자에게 보여줄 커스텀 UI를 반환합니다.
      return <div>죄송합니다. 오류가 발생했습니다.</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;