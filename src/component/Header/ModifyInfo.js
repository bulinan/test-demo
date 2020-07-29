import React from 'react'
import { Modal, Form, Input, message } from 'antd'
import { axiosPost } from '@/extend/axios/index.js';
import '@/assets/css/modal.scss'
const FormItem = Form.Item;

export default function ModifyInfo(props){
    const {visible} = props;
    const [form] = Form.useForm();
    const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 16 },
    };
    const handleOk = () => {
        form.validateFields().then(values => {
            console.log(values);
            axiosPost('/manage/sys/user/updateSelfPassword',{
                nowPassword:values.nowPassword,
                newPassword:values.newPassword,
                confirmPwd:values.confirmPwd
            }).then((res) => {
                if(res.code == '0'){
                    message.success("操作成功");
                    handleCancel();
                }else{
                    message.error(res.message);
                }          
            }).catch((error) => {
                console.log(error);
            });
        }).catch(error => {
            console.log(error);
        })
    }
    const handleCancel = () => {
        form.resetFields();
        props.hideModal();
    }
    return (
        <div>
            <Modal
            getContainer={false}
            width={600}
            className="modal-common"
            title="修改密码"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            >
                <div className="modal-inner-connent">
                    <Form {...formItemLayout} form={form}>
                        <FormItem label="密码" name="nowPassword" rules={[
                            { required: true, message: '请输入密码'}
                        ]}>
                            <Input type="password" placeholder="请输入密码" />
                        </FormItem>
                        <FormItem label="新密码" name="newPassword" rules={[
                            { required: true, message: '请输入新密码'}
                        ]}>
                            <Input type="password" placeholder="请输入新密码" />
                        </FormItem>
                        <FormItem label="确认密码" name="confirmPwd" rules={[
                            { required: true, message: '请输入确认密码'}
                        ]}>
                            <Input type="password" placeholder="请输入确认密码" />
                        </FormItem>
                    </Form>
                </div>
            </Modal>
        </div>
    )
}