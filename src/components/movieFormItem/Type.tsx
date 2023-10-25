import { Form, Radio } from 'antd';
import { Controller } from 'react-hook-form';
export default function Type({ control }: any) {
    return (
        <Form.Item label='Type'>
            <Controller
                name='type'
                control={control}
                render={({ field }) => (
                    <Radio.Group {...field}>
                        <Radio value='film'> Film </Radio>
                        <Radio value='tv'> TV Series </Radio>
                        <Radio value='documentary'> Documentary </Radio>
                    </Radio.Group>
                )}
            />
        </Form.Item>
    );
}