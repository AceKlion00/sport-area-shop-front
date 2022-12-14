import React from 'react';

import RadioGroup from '@components/RadioGroup/RadioGroup';
import FormikField from '../FormikField';

const RadioGroupField = React.forwardRef(function RadioGroupField(props, ref) {
    return <FormikField {...props} ref={ref} component={RadioGroup} />;
});

export default RadioGroupField;
