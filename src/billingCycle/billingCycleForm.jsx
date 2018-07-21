import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";

import { init } from "./billingCyclesActions";

import labelAndInput from "../common/form/labelAndInput";

class BillingCycleForm extends Component {
  render() {
    const { handleSubmit, readOnly } = this.props;

    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field
            name="name"
            component={labelAndInput}
            label="Nome"
            cols="12 4"
            placeholder="Informe o Nome"
            readOnly={readOnly}
          />
          <Field
            name="month"
            label="Mês"
            cols="12 4"
            placeholder="Informe o Mês"
            component={labelAndInput}
            readOnly={readOnly}
          />
          <Field
            name="year"
            label="Ano"
            cols="12 4"
            placeholder="Informe o Ano"
            component={labelAndInput}
            readOnly={readOnly}
          />
        </div>
        <div className="box-footer">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-default"
            onClick={this.props.init}
          >
            Cancelar
          </button>
        </div>
      </form>
    );
  }
}

BillingCycleForm = reduxForm({
  form: "billingCycleForm",
  destroyOnUnmount: false
})(BillingCycleForm);
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(BillingCycleForm);
