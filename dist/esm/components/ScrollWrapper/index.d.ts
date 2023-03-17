import React from 'react';
import { IScrollWrapper } from '../../types';
import './style.css';
declare type HOC<InjectedProps, OwnProps> = <P>(Component: React.ComponentType<P & InjectedProps>) => React.ComponentType<P & OwnProps>;
declare const ScrollWrapper: HOC<{}, IScrollWrapper>;
export default ScrollWrapper;
