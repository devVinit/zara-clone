import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { toggleLoader } from './redux/actions/toggle-loader.action';
import { HeaderComponent } from './components/header.component';
import { LoaderComponent } from './components/loader.component';

interface AppProps {
	isShowLoader?: boolean;
	toggleLoader?: any;
}

function App(props: AppProps) {
	return (
		<div className="App">
			<HeaderComponent />
			{
				props.isShowLoader && <LoaderComponent />
			}
		</div>
	);
}

const mapStateToProps = (state: any) => ({ isShowLoader: state.loaderReducer.isShowLoader })

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ toggleLoader }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
