import { connect } from 'react-redux';
import { compose } from 'redux';
import biz from '@/biz';
import UserToolbar from '@/components/userManagement/UserToolbar';

const mapStateToProps = (state) => ({
  toolbar: biz.selectors.getUserToolbar(state)
});

const mapDispatchToProps = {
  reloadTable: biz.actions.reloadUserTable,
  updateSearchKeywords: biz.actions.updateUserSearchKeywords,
  onAdd: biz.actions.addUser
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(UserToolbar);
