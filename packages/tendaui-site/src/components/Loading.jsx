import React from 'react';
import './loading.scss';

export default function Loading() {
  return (
    <div className="tdesign-loading">
      <div className="tdesign-loading-spinner"></div>
      <p>加载中...</p>
    </div>
  );
}

