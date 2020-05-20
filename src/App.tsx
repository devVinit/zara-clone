import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { toggleLoader } from './redux/actions/toggle-loader.action';
import { HeaderComponent } from './components/header.component';
import { LoaderComponent } from './components/loader.component';
import { ProductProfilePage } from './pages/product-profile/product-profile.page';
import { ProductListPage } from './pages/product-list/product-list.page';

interface AppProps {
	isShowLoader?: boolean;
	toggleLoader?: any;
}

function App(props: AppProps) {
	return (
		<div className="App">
			<div className="fixed w-full">
				<HeaderComponent />
			</div>
			<ProductListPage />
			{
				props.isShowLoader && <LoaderComponent />
			}
		</div>
	);
}

const mapStateToProps = (state: any) => ({ isShowLoader: state.loaderReducer.isShowLoader })

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ toggleLoader }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
