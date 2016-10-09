import * as types from 'constants/action-type'
import { actionFetch } from 'common/http'

export default {
    fetchMetrics(callback) {
        return actionFetch({
            url: '/daijia/v1/daijia/metricTypes/',
            actionType: types.FETCH_METRICS_SUCCESS,
            callback
        })
    },

    changeMetric(type, value) {
        return {
            type: types.CHANGE_METRIC,
            data: {
                type,
                value
            }
        }
    }
}