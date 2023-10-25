import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { defaultValues } from '../movieFormItem/DefaultValues';
import { Checkbox } from 'antd';

import MovieFormItem from '../movieFormItem';

export const MovieForm = () => {
    const [componentDisabled, setComponentDisabled] = useState(true);

    const { control, handleSubmit, reset,setValue,register } = useForm({
        defaultValues,
    });
    const onSubmit: SubmitHandler<any> = (data) => {
        console.log(data);
    };

    return (
        <>
            <Checkbox
                checked={componentDisabled}
                onChange={(e) => setComponentDisabled(e.target.checked)}
            >
                Form disabled
            </Checkbox>
            <MovieFormItem
                control={control}
                componentDisabled={componentDisabled}
                handleSubmit={handleSubmit}
                reset={reset}
                onSubmit={onSubmit}
                setValue={setValue}
                register={register}
            />
        </>
    );
};