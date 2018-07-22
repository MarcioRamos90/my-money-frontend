import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { reduxForm, Field, formValueSelector } from "redux-form";

import { init } from "./billingCyclesActions";

import labelAndInput from "../common/form/labelAndInput";
import ItemList from "./ItemList";
import Summary from "./sumary";

class BillingCycleForm extends Component {
  calculateSummary() {
    const sum = (t, v) => t + v;
    return {
      sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
      sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
    };
  }

  render() {
    const { handleSubmit, readOnly, credits, debts } = this.props;
    const { sumOfCredits, sumOfDebts } = this.calculateSummary();
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
          <Summary credit={sumOfCredits} debt={sumOfDebts} />
          <ItemList
            field="credits"
            legend="Créditos"
            cols="12 6"
            list={credits}
            readOnly={readOnly}
          />
          <ItemList
            field="debts"
            legend="Débitos"
            cols="12 6"
            list={debts}
            readOnly={readOnly}
            showStatus={true}
          />
        </div>
        <div className="box-footer">
          <button type="submit" className={`btn btn-${this.props.submitClass}`}>
            {this.props.submitLabel}
          </button>
          <button
            type="button"
            className={`btn btn-${this.props.btnClass}`}
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
const selector = formValueSelector("billingCycleForm");
const mapStateToProps = state => ({
  credits: selector(state, "credits"),
  debts: selector(state, "debts")
});
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BillingCycleForm);
