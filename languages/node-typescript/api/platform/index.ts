import * as returnData from './returnData';
import * as returnActions from './returnActions';
import * as webhooks from './webhooks';
import * as destinations from './destinations';
import * as labelRequests from './labelRequests';
import * as listings from './listings';
import * as fraudReports from './fraudReports';
import * as happyReturns from './happyReturns';
import * as itemGrading from './itemGrading';
import * as cart from './cart';

export default {
  ...returnData,
  ...returnActions,
  ...webhooks,
  ...destinations,
  ...labelRequests,
  ...listings,
  ...fraudReports,
  ...happyReturns,
  ...itemGrading,
  ...cart,
};
