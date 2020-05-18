import React, { Component } from "react";
import "./shop.styles.scss";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { Route, Switch } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import ItemPage from "../itempage/itempage.component";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import {connect} from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.actions';
class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    // const {updateCollections} = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Switch>
          <Route exact path={`${match.path}`} component={CollectionsOverview} />
          <Route
            exact
            path={`${match.path}/:collectionId`}
            component={CollectionPage}
          />
          <Route
            path={`${match.path}/:collectionId/:itemId`}
            component={ItemPage}
          />
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  // updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);
