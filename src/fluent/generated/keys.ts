import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '0cc41eca496d41abba8a1688023007d5'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'c6dfd1ef8dc842ccbdb2c1fdeb457d3d'
                    }
                }
                composite: [
                    {
                        table: 'sys_dictionary'
                        id: '005f8331b3394dd4b71949b4e3355a23'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'error_message'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '01e8ce808c6d4c09ae3719fc82a5ef00'
                        key: {
                            ui_policy: '79cb80dc75984636aa5682f4b3bbe9c8'
                            field: 'customer'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '022023ab5b5448d1a04b825a07e2a80e'
                        key: {
                            sys_security_acl: '6fccda9d2c4149b08875e3f21a44eb13'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '030252aa0a6941e298c1a43d1a7797e9'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'order_type'
                            value: 'cancel'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0353a5900b5d4b7b80d1d0f5880d034c'
                        key: {
                            name: 'x_973795_om_tele_0_prod_spec'
                            element: 'effective_to'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '03d4e67ea60e4d57b0f54c8a52aefd45'
                        key: {
                            name: 'x_973795_om_tele_0_svc_spec'
                            element: 'service_type'
                            value: 'internet'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '05f9b33ec2ce4081a1ef294272cfdf79'
                        key: {
                            name: 'x_973795_om_tele_0_order_log'
                            element: 'log_level'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '05ff1f518bf243ad9a993abda6de1757'
                        key: {
                            sys_security_acl: '177b55b7da814e25a519e8d89bbbf16c'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '06b1778b52e54fa38fc2fee20e4b6571'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'order_type'
                            value: 'amend'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '06c08cfbda5e4847b220f4eea484f005'
                        key: {
                            name: 'x_973795_om_tele_0_char_val'
                            element: 'old_value'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '06dbb6760cc34ab5a7f1e74791ef5652'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '06f407dbcf15477180acf23e4099177c'
                        key: {
                            sys_security_acl: 'bb9233bc139d4809bc9ac4566dd81a4d'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '07bbff759a2b45ef8241825d73c0cb6a'
                        key: {
                            name: 'x_973795_om_tele_0_customer'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0902f48f0b834c76bcb84ec06564e08b'
                        key: {
                            name: 'x_973795_om_tele_0_svc_res'
                            element: 'mandatory'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '09972bf22fc44333a3b03b9207c623c8'
                        key: {
                            sys_security_acl: 'fc323e73e9314d848858313b6232412d'
                            sys_user_role: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0a6736a7de2f40d19e6ac13c0509cb06'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'retry_count'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0a8f571a407c48c697b5eaa5e1b684d3'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'line_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0ad22ae17b9e4ca1a5b72229b9039323'
                        key: {
                            name: 'x_973795_om_tele_0_prod_spec'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0b33ac1214d64a5fb11d11a3411cee42'
                        key: {
                            sys_security_acl: 'c0af06c344984dda9b20672759e5633c'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0b4a3c1717ed459e8599428792f5436b'
                        key: {
                            sys_security_acl: 'e464e99630b348238dd91bab98f524e9'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0bb3466e206641f7ad40d5aacf6a8219'
                        key: {
                            name: 'x_973795_om_tele_0_svc_spec'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: '0bf15e56d6c24e4d909c60de41899ff0'
                        key: {
                            table: 'x_973795_om_tele_0_order_line'
                            short_description: 'Lock fields on completed or cancelled order lines'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '0c397df459a74f29819073f3b445a1c0'
                        key: {
                            logical_table_name: 'x_973795_om_tele_0_order_log'
                            col_name_string: 'order'
                        }
                    },
                    {
                        table: 'sys_ws_query_parameter_map'
                        id: '0c59652844b24b948983373974ee10ae'
                        key: {
                            web_service_operation: '0ad7a64b96884afa909c1021e5aa9d03'
                            web_service_query_parameter: 'a7a0cc72986a47399bc70573997970f1'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0c9ad65ad44d4fdab9319baa77556639'
                        key: {
                            name: 'x_973795_om_tele_0_order_log'
                            element: 'log_level'
                            value: 'info'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '0d08ece03e174c85a18ccaa95bebc01c'
                        key: {
                            name: 'x_973795_om_tele_0.admin'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '0df07e265a884992a9c76cba301fe9ef'
                        key: {
                            name: 'x_973795_om_tele_0_res_spec'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0e1856e617554cefb79d5c839a24b17c'
                        key: {
                            sys_security_acl: '8ed067e341f444dbbcbe016ada88089d'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0e9366ab3bb846759d1f28e74d299e93'
                        key: {
                            name: 'x_973795_om_tele_0_prod_spec'
                            element: 'effective_from'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0ef48fd0e6a04e20881ef3c73536c566'
                        key: {
                            name: 'x_973795_om_tele_0_prod_offer'
                            element: 'status'
                            value: 'active'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0fdd8ac220de4b6f8a40ac272f2ff7d9'
                        key: {
                            name: 'x_973795_om_tele_0_prod_offer'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '103ff56a97bd460ab602c66d80e4269a'
                        key: {
                            sys_security_acl: '40bd871518914c5e8416ae89adcee182'
                            sys_user_role: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '10c78b706108459fafa7c25c188ccdf7'
                        key: {
                            name: 'x_973795_om_tele_0_prod_offer'
                            element: 'product_spec'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1139b1a89e624e57ae523acf65507e91'
                        key: {
                            name: 'x_973795_om_tele_0_prod_spec'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '12109b07d7584be4b1073dfc828c0f68'
                        key: {
                            name: 'x_973795_om_tele_0_svc_spec'
                            element: 'version'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '12912cb9f48f4565aea391b954290d3c'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'retry_count'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '12d9c2f55ce549a09294b1a2393bdb6f'
                        key: {
                            sys_security_acl: '0dba191e0ce34dd4aaea2cd0fbd54f4e'
                            sys_user_role: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '134eac0ad9724bf0b17797a8444eae39'
                        key: {
                            name: 'x_973795_om_tele_0_prod_offer'
                            element: 'currency'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '137c4490bf774a51b4673333f6d69b7d'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'state'
                            value: 'validating'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1437448d9dfe4cbdb1e6be75b990b4f6'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'fulfillment_state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '145571a93a5f4d18aab2a78b275ab886'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'state'
                            value: 'pending'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '17a250dd099d4870afdda7f494736ae2'
                        key: {
                            sys_security_acl: 'b4bcb6310915482882b171f207e16fdb'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '17ecab59c3cf4b10c7f77242b4013128'
                        key: {
                            name: 'x_973795_om_tele_0_prod_svc'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '187dc4c215754292b29d4eff1febc971'
                        key: {
                            name: 'x_973795_om_tele_0_prod_spec'
                            element: 'status'
                            value: 'retired'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '194225743d3e49099d8e8b94bc873601'
                        key: {
                            name: 'x_973795_om_tele_0_res_spec'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '19bfa963d2704427b3e19442873fe3f9'
                        key: {
                            name: 'x_973795_om_tele_0_svc_spec'
                            element: 'service_type'
                            value: 'voice'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1a0137b799da462981e1329bf4be6c48'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'state'
                            value: 'cancelled'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '1b86f94cbfc24efab2e84c30a662e702'
                        key: {
                            category: 'x_973795_om_tele_0_customer'
                            prefix: 'CUST'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1c0c71dc772e4139bc5163007b863367'
                        key: {
                            sys_security_acl: '7dd55adc1ac043ba9844e0c7ed96bc78'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1c4b6418558a4af3b7244f2f5645795e'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'line_type'
                            value: 'product'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '1d4c84adc3c38b10c7f77242b4013101'
                        key: {
                            name: 'x_973795_om_tele_0_prod_offer'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1de6b1f647284824ba3d169e6b70b8ff'
                        key: {
                            name: 'x_973795_om_tele_0_res_spec'
                            element: 'resource_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1ee307bf19224e74870d5e02871d01bf'
                        key: {
                            name: 'x_973795_om_tele_0_prod_offer'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1ee4bc7c7ceb408eb860f901e12a09b4'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1f78344cf6e1482fb6aa4fed6597c038'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'action'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1fb92f6b435248a9b25e5ef2b2a3f5bf'
                        key: {
                            sys_security_acl: '500bae1f42de41c2bab0cf93700ab1fa'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '204770fe7b4f40bc9d74691132afad38'
                        key: {
                            name: 'x_973795_om_tele_0_res_spec'
                            element: 'version'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '207e854654b942958ad0f4bcc9d87486'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2121082d360741d7af1fe9c525daffae'
                        key: {
                            name: 'x_973795_om_tele_0_res_spec'
                            element: 'version'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '214c84adc3c38b10c7f77242b401310a'
                        key: {
                            sys_ui_section: {
                                id: '1d4c84adc3c38b10c7f77242b4013101'
                                key: {
                                    name: 'x_973795_om_tele_0_prod_offer'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '215db2987e4949a3b1a66d0a58ea35b9'
                        key: {
                            name: 'x_973795_om_tele_0_prod_char'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '21c8a63ae584417a95f9d3a2f34402ff'
                        key: {
                            name: 'x_973795_om_tele_0_prod_spec'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '23184689f2ce41f6a658d096d18e451b'
                        key: {
                            logical_table_name: 'x_973795_om_tele_0_order_line'
                            col_name_string: 'product_spec'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2324155fe7d64fadacb3693d2af14374'
                        key: {
                            name: 'x_973795_om_tele_0_prod_spec'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '236018da7d714558b002d14293f729c8'
                        key: {
                            name: 'x_973795_om_tele_0_prod_svc'
                            element: 'product_spec'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '24bf0fffe31d4a98ba70e93ab8682141'
                        key: {
                            name: 'x_973795_om_tele_0_res_spec'
                            element: 'resource_type'
                            value: 'port'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '254c84adc3c38b10c7f77242b4013167'
                        key: {
                            sys_ui_section: {
                                id: '1d4c84adc3c38b10c7f77242b4013101'
                                key: {
                                    name: 'x_973795_om_tele_0_prod_offer'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '25bd3454561249a88c1c6769dd9de510'
                        key: {
                            sys_security_acl: '66648016c9de4cb49d4319e13c957630'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '25d30794d7604fa4bbdc92f5641c6040'
                        key: {
                            ui_policy: '3abf043efcf74b5b9d05f91dfd4a11fc'
                            field: 'order_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '261d245f2a904731be47b81eda997725'
                        key: {
                            name: 'x_973795_om_tele_0_res_spec'
                            element: 'resource_type'
                            value: 'hardware'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '26c4a292be9c4574815f3365f9ff5a79'
                        key: {
                            ui_policy: 'be65040f9d5d45188ce03be11af3491d'
                            field: 'original_order'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '27115c31a13b4dce87286897185a2511'
                        key: {
                            name: 'x_973795_om_tele_0_customer'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '276430c2701d431faec0754c64cd628e'
                        key: {
                            sys_security_acl: '8cb92d6d2129460fa2b412bef561937a'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '27d0acc274014ab2b1eedf8fa9b9c2d7'
                        key: {
                            name: 'x_973795_om_tele_0_prod_offer'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '27f7a85efd1e4c3dbf1e72fd8eb2ce66'
                        key: {
                            name: 'x_973795_om_tele_0_prod_offer'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '283c9a49a612458dad328e8640843486'
                        key: {
                            name: 'x_973795_om_tele_0_customer'
                            element: 'customer_type'
                            value: 'individual'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '28e112933aaa4fcd9f03ac67cddb9869'
                        key: {
                            ui_policy: 'fd1a009413824994a1c9ead26c701887'
                            field: 'line_type'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '294c84adc3c38b10c7f77242b4013164'
                        key: {
                            sys_ui_section: {
                                id: '1d4c84adc3c38b10c7f77242b4013101'
                                key: {
                                    name: 'x_973795_om_tele_0_prod_offer'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '29fd436fdb134a4b805ec5d83a74b9b7'
                        key: {
                            name: 'x_973795_om_tele_0.agent'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2a5838303a8549bf88161ad5fade5329'
                        key: {
                            sys_security_acl: 'ad5e864114ae44928d4c7b52411c8c0d'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2bf58a53a9dd48988d087c41e666f24f'
                        key: {
                            sys_security_acl: '8e92b20df67548568868690bfef2fca8'
                            sys_user_role: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2c7c0a8a4d86473ea77b99e0f66a561f'
                        key: {
                            name: 'x_973795_om_tele_0_order_log'
                            element: 'order'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2d4c84adc3c38b10c7f77242b401310c'
                        key: {
                            sys_ui_section: {
                                id: '1d4c84adc3c38b10c7f77242b4013101'
                                key: {
                                    name: 'x_973795_om_tele_0_prod_offer'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'description'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2dd3e83e6ae24bccb38c7868a24af4d4'
                        key: {
                            name: 'x_973795_om_tele_0_customer'
                            element: 'country'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '2df925e6bcff4a898d01dfac124e3dac'
                        key: {
                            name: 'x_973795_om_tele_0_prod_spec'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2e0585333c484b8ebc604f9a64a7a060'
                        key: {
                            name: 'x_973795_om_tele_0_svc_res'
                            element: 'service_spec'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2e1677d1b3ff48aea621342a30a8ba74'
                        key: {
                            name: 'x_973795_om_tele_0_prod_char'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2f07325acd564038ba6ca6e16d498c4e'
                        key: {
                            sys_security_acl: 'e5805be2aa8a468985a5eab0638d2eaf'
                            sys_user_role: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2f093ac33a0b44c8b1b757c70ab1095a'
                        key: {
                            name: 'x_973795_om_tele_0_prod_char'
                            element: 'char_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2f0ed03454464aeabada2ff57d162d75'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'order_type'
                            value: 'resume'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2f975af9422044f48c267d718bc06ab5'
                        key: {
                            name: 'x_973795_om_tele_0_res_spec'
                            element: 'resource_type'
                            value: 'network'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '3068699744114152bc5d087829b86845'
                        key: {
                            ui_policy: 'fd1a009413824994a1c9ead26c701887'
                            field: 'prod_offering'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '308be5e107644a0aba08cc9a44dbe135'
                        key: {
                            name: 'x_973795_om_tele_0_prod_char'
                            element: 'product_spec'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3281d3f8e54847c68a25e16ccdcc537d'
                        key: {
                            name: 'x_973795_om_tele_0_prod_offer'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '32d083cc597f46cb8e6cc7c36df203cc'
                        key: {
                            name: 'x_973795_om_tele_0_prod_spec'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '332ed28d6f574347aa308b486410d371'
                        key: {
                            name: 'x_973795_om_tele_0_prod_char'
                            element: 'char_type'
                            value: 'boolean'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '333652f30c7b40c386f33d19cb3b1b9b'
                        key: {
                            name: 'x_973795_om_tele_0_char_val'
                            element: 'characteristic'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3379b9ddad55419ca164c4acb69c4117'
                        key: {
                            sys_security_acl: '3542a0c1fc5b4e7ea81e3962552b36af'
                            sys_user_role: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3379de9db677431b9d9e10dc5500234c'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '33f352ca78144eb6961445c13992670f'
                        key: {
                            name: 'x_973795_om_tele_0_prod_svc'
                            element: 'sequence'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '347caf51fe704e15b0f6ec6c83c77b40'
                        key: {
                            sys_security_acl: 'e2d2ca16caf6447e861ae3ca8746111b'
                            sys_user_role: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '34f3ad11edab45f2824a480c824b02d2'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'external_order_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '34fad824b3e746e58e5a035b839ba590'
                        key: {
                            name: 'x_973795_om_tele_0_prod_char'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3574ff0f0db24afda4b73e2e7b60b56a'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'line_type'
                            value: 'resource'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '35a34be1a96543b1bcbb445e2c70430c'
                        key: {
                            name: 'x_973795_om_tele_0_customer'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '35a72aa2451d4630ace443aff4cb01b7'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'fulfillment_state'
                            value: 'in_progress'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '35a85780304d43b4955959ec4cf4a76f'
                        key: {
                            name: 'x_973795_om_tele_0_prod_svc'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3798d407585d4b30991602c4449523e8'
                        key: {
                            sys_security_acl: '215e7de9529445c283734bcf110e156c'
                            sys_user_role: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '388ed2f0e5234e06bdcc2619a5552307'
                        key: {
                            name: 'x_973795_om_tele_0_svc_res'
                            element: 'sequence'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '38f5f190b6304a489e9bd6ae6cb4ebc8'
                        key: {
                            sys_security_acl: 'bfc697c79316417a9ed2bfbcf45343e4'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3985434129ef4e3f92315ed18dd78f41'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '39946429d12d4f10ad9ed3a74b6a408b'
                        key: {
                            sys_security_acl: '03dd00b8908d408cbc9168fcf2ea3c49'
                            sys_user_role: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '39a3ad5a983641b3bff32deff44fc555'
                        key: {
                            name: 'x_973795_om_tele_0_order_log'
                            element: 'external_ref'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '39d5d007b40b416a8388781b5d7687cf'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: '39f59255bd2943b7b90891285d0ef59c'
                        key: {
                            id: 'omt_orders'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: '3abf043efcf74b5b9d05f91dfd4a11fc'
                        key: {
                            table: 'x_973795_om_tele_0_order'
                            short_description: 'Lock fields on completed or cancelled orders'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3b1db79eeb1940e8ab5849bb5686b539'
                        key: {
                            name: 'x_973795_om_tele_0_order_log'
                            element: 'log_level'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3b2ae1f8ce5a44f9ae8d47eb4d8d682e'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'state'
                            value: 'failed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '3c2a2ec4d2954457953b344204313e48'
                        key: {
                            ui_policy: '0bf15e56d6c24e4d909c60de41899ff0'
                            field: 'resource_spec'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3c70e2cc9ab546e1a9df96dc50f88528'
                        key: {
                            name: 'x_973795_om_tele_0_res_spec'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3cab8d73826d47a488769e540ce76d6a'
                        key: {
                            name: 'x_973795_om_tele_0_prod_char'
                            element: 'product_spec'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3df736cce4eb4a2e9a4c0ac6bc5d7759'
                        key: {
                            name: 'x_973795_om_tele_0_svc_spec'
                            element: 'service_type'
                            value: 'vpn'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3e56e6ef90bf4e8daaaa03ecf2195f0a'
                        key: {
                            name: 'x_973795_om_tele_0_res_spec'
                            element: 'resource_type'
                            value: 'sim'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3ea35ed7576b4b9bb51bfbe19b89d9f3'
                        key: {
                            sys_security_acl: '2d68c4a20f3e496b87867e4361b15a3c'
                            sys_user_role: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3ea8897536ab4202a87577203ba699f9'
                        key: {
                            name: 'x_973795_om_tele_0_prod_offer'
                            element: 'start_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3ee796a6fdd44d48a8d1c690824e7ab2'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'quantity'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '3eec6b59c3cf4b10c7f77242b4013179'
                        key: {
                            name: 'x_973795_om_tele_0_prod_spec'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3f453bfab4bc48e8960ade2b6133f724'
                        key: {
                            sys_security_acl: 'cb28661b31b44219a270181b19ee8215'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '4016f75026d74c4da47145c635cec8a1'
                        key: {
                            ui_policy: '3abf043efcf74b5b9d05f91dfd4a11fc'
                            field: 'requested_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '41a82a5db7e846b9a30470ccb49edbcf'
                        key: {
                            name: 'x_973795_om_tele_0_customer'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '423193cd0aa94cf09699d48e20c663e1'
                        key: {
                            name: 'x_973795_om_tele_0_svc_spec'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '423d846362784e5aa1ad8ee86faa64a2'
                        key: {
                            name: 'x_973795_om_tele_0_prod_offer'
                            element: 'end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '426fd122beec412a932fb3f9d5c5f146'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'external_ref'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '43765db66a3f4195871201e798e03d12'
                        key: {
                            sys_security_acl: 'ccc7f52a42034a8b946c925a5b4fb783'
                            sys_user_role: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '439149294b074b8182927bbe5aa56ec1'
                        key: {
                            sys_security_acl: '505e42955f2446dc868867512f8ede53'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ws_query_parameter_map'
                        id: '43cda3a9ec5c4e0ca87b461dbde13d38'
                        key: {
                            web_service_operation: 'b55edb3093914384bdc33aa7b24c9abc'
                            web_service_query_parameter: '3b556359db274ae2902cec5cc51b7383'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4403951c5d514ce0b1cccbf85f591688'
                        key: {
                            sys_security_acl: 'f57d3fcc809841eca43c407bc9f7404a'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '444300e4f54e480d862ca95a00e38b93'
                        key: {
                            role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                            contains: {
                                id: '872f87569a934c2eb58e31b00ca6c628'
                                key: {
                                    name: 'x_973795_om_tele_0.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '4455e879c3ae4ffd9437f1946f28a7c5'
                        key: {
                            name: 'x_973795_om_tele_0_res_spec'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '449a3aeb5d084e24ad5bc33ae176de0f'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'quantity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '44dc4188d0b04ecaa2e953311015220b'
                        key: {
                            name: 'x_973795_om_tele_0_res_spec'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '44ece359c3cf4b10c7f77242b401319d'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '45addcf3f3e24d2ab3a65d8b22aa8e6f'
                        key: {
                            name: 'x_973795_om_tele_0_res_spec'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '45fb7c1beb4d4f659077a2dd1491b888'
                        key: {
                            name: 'x_973795_om_tele_0_prod_char'
                            element: 'char_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '46b67431fa9f4cba828186a9349fb781'
                        key: {
                            name: 'x_973795_om_tele_0_res_spec'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '46cd2e9ee80245db8b83d66dd09fbf76'
                        key: {
                            name: 'x_973795_om_tele_0_svc_res'
                            element: 'sequence'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '471da3b1e6ea4797b4106153dadc593d'
                        key: {
                            name: 'x_973795_om_tele_0_prod_char'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '47ee8464aa2e402caf900b20bb9b97c1'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '48303d7fe5f04a1c887ae9cac8c4ff11'
                        key: {
                            name: 'x_973795_om_tele_0_customer'
                            element: 'email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4874ba6bdcc147cf800804894e0bb873'
                        key: {
                            name: 'x_973795_om_tele_0_prod_offer'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '48bc2ff5c80c4eb7b988b32bd9f783e0'
                        key: {
                            name: 'x_973795_om_tele_0_prod_char'
                            element: 'char_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '48fb279a73564c0d97cfc6b28bfd34c4'
                        key: {
                            sys_security_acl: '0760ba51d16c430cb29a5f0d9abfb299'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '49033db83c6946e292c64434d5e18e63'
                        key: {
                            sys_security_acl: '27cbabaa750d47b8b4b2678f528bb10c'
                            sys_user_role: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '49ac9d90bb5441e6b38f677ee3efe7c1'
                        key: {
                            name: 'x_973795_om_tele_0_svc_spec'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4a357ab811ce481c8b05062e00507723'
                        key: {
                            name: 'x_973795_om_tele_0_res_spec'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4a409547a79a42949742a24015dd8538'
                        key: {
                            name: 'x_973795_om_tele_0_res_spec'
                            element: 'status'
                            value: 'active'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4af763b88c1748d4a68e67c35d85fcc3'
                        key: {
                            name: 'x_973795_om_tele_0_prod_spec'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4b4b9c4b978f47fba500093480067040'
                        key: {
                            sys_security_acl: '34f487c1154f400a866bf7c995c35de3'
                            sys_user_role: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '4bdca359c3cf4b10c7f77242b401312e'
                        key: {
                            name: 'x_973795_om_tele_0_order_log'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4bf3caa09a364ae3b302c42646851772'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'fulfillment_state'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '4db8b886abb74bf0a4e886e4b72a61ef'
                        key: {
                            ui_policy: '0bf15e56d6c24e4d909c60de41899ff0'
                            field: 'prod_offering'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4e05b6f3b833473db138c8ae5837b49e'
                        key: {
                            name: 'x_973795_om_tele_0_prod_char'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4e7f4e7a6a8341b3971bc2d0c555fa5a'
                        key: {
                            sys_security_acl: '0e3feba97e4d40fb935c0fb0e75bb2b3'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4f2bbd68d57d4c6eb9ad7fb8e2f89e49'
                        key: {
                            name: 'x_973795_om_tele_0_prod_offer'
                            element: 'currency'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4f75647d53e84d40985c61c372155d58'
                        key: {
                            name: 'x_973795_om_tele_0_customer'
                            element: 'customer_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4fad0025d8374980bbe66cf559355a97'
                        key: {
                            name: 'x_973795_om_tele_0_svc_spec'
                            element: 'service_type'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: '508fa1298d954c2a966100ab1da1664b'
                        key: {
                            id: 'omt_new_order'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '522d6ad1e6334b898c41c2bad857b64c'
                        key: {
                            name: 'x_973795_om_tele_0_order_log'
                            element: 'payload'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '522ebc592e454bf2a5b491ec48ec51b2'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'state'
                            value: 'draft'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5284812d591e4e50a3f7a6076c96789b'
                        key: {
                            name: 'x_973795_om_tele_0_customer'
                            element: 'phone'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '529391fdf0754088a64a7bbb23ee9fd7'
                        key: {
                            name: 'x_973795_om_tele_0_prod_offer'
                            element: 'currency'
                            value: 'eur'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '529db841b7bd4c69b97787057c02a20f'
                        key: {
                            sys_security_acl: '7bddd13afc2f4d659d3801273a635dbd'
                            sys_user_role: {
                                id: '872f87569a934c2eb58e31b00ca6c628'
                                key: {
                                    name: 'x_973795_om_tele_0.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '52d90c525a2b4c0b9d6ac1c3b8529a64'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'prod_offering'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '5307a76187dd46b6bcd57c5477d14b7d'
                        key: {
                            logical_table_name: 'x_973795_om_tele_0_char_val'
                            col_name_string: 'characteristic'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '53ef84fcefdc439bb26481bb5a24707e'
                        key: {
                            ui_policy: 'c3543d8fe6634dcaa25f1b3bff452872'
                            field: 'original_order'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '541ff6d3fae3467f98b6f21a2c37334a'
                        key: {
                            sys_security_acl: '509e457eea0f4771819246748c3cf139'
                            sys_user_role: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sp_page'
                        id: '553010c334a749889ea449a41aa29482'
                        key: {
                            id: 'omt_order_detail'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '554c84adc3c38b10c7f77242b4013107'
                        key: {
                            sys_ui_section: {
                                id: '1d4c84adc3c38b10c7f77242b4013101'
                                key: {
                                    name: 'x_973795_om_tele_0_prod_offer'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: '56792c060be2415b939850844bed479f'
                        key: {
                            id: 'omt_catalog'
                        }
                    },
                    {
                        table: 'sys_ws_query_parameter_map'
                        id: '56a9087ecbf74563b0e98deeb41d0a68'
                        key: {
                            web_service_operation: '0ad7a64b96884afa909c1021e5aa9d03'
                            web_service_query_parameter: '5c6714f6fd1d4eb2974814e61faa80b0'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '57e5571576904b39ba6c6ad9130a8bd1'
                        key: {
                            name: 'x_973795_om_tele_0_svc_spec'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '57ea7dda0a834f1ea4a6e44d9cd373d8'
                        key: {
                            name: 'x_973795_om_tele_0_order_log'
                            element: 'response'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '580a8150e15845d2aeaf16da1d13b8b8'
                        key: {
                            sys_security_acl: 'e9be0df421584f3d8ff586c473674d60'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '581c557e327541db8fb48ce002875528'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'fulfillment_state'
                            value: 'not_started'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '58d763066da4464cb17773989d56ddf2'
                        key: {
                            name: 'x_973795_om_tele_0_svc_spec'
                            element: 'service_type'
                            value: 'mobile'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '58e4a67e8bd44c45b3102c0f8db01b79'
                        key: {
                            name: 'x_973795_om_tele_0_prod_offer'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '594312bee1cb4478b6969cdc96527f20'
                        key: {
                            category: 'x_973795_om_tele_0_svc_spec'
                            prefix: 'SS'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '594461a4466142a0b00368ea52b78c92'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'action'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '59639356e90642ee92bd45dacd85800e'
                        key: {
                            name: 'x_973795_om_tele_0_svc_spec'
                            element: 'service_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5ba9830d51304168bcbf53e127e7509a'
                        key: {
                            name: 'x_973795_om_tele_0_svc_res'
                            element: 'service_spec'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5be4b09f89464bba96e18d2e74164ec4'
                        key: {
                            name: 'x_973795_om_tele_0_svc_res'
                            element: 'mandatory'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5bef1631da2a40f78c36c2589865e07d'
                        key: {
                            sys_security_acl: 'a1630d3cad324dd2a6efe4bfb7695a5e'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5c3f9a18404c4814af7dc1f1168f735b'
                        key: {
                            name: 'x_973795_om_tele_0_svc_spec'
                            element: 'service_type'
                            value: 'data'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5cae8c6738ba4dca9a5042be62a52ed8'
                        key: {
                            name: 'x_973795_om_tele_0_prod_offer'
                            element: 'status'
                            value: 'draft'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5cf5463408a546cc91b906f783d1626f'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'order_type'
                            value: 'disconnect'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5d597aeae87f4cafb896719ce93bc577'
                        key: {
                            name: 'x_973795_om_tele_0_customer'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5de7bad099c44e9b802c211c95d6291e'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'order'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5e0f9ad7abc249a499a18dc10295feb9'
                        key: {
                            name: 'x_973795_om_tele_0_prod_spec'
                            element: 'product_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5e5e60d9481e40189b93bd04ed4c8b0b'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'external_order_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '603c15a27d544894bdfed1548f6999d9'
                        key: {
                            name: 'x_973795_om_tele_0_res_spec'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '60a9637ce1074913a2ae3ed7cfc9aa61'
                        key: {
                            name: 'x_973795_om_tele_0_char_val'
                            element: 'order_line'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '60dc9c6f116e421eb336c6839bc40b7c'
                        key: {
                            name: 'x_973795_om_tele_0_customer'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '60fceb59c3cf4b10c7f77242b40131f0'
                        key: {
                            name: 'x_973795_om_tele_0_svc_res'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6103653213704e5aba0f89af0a4a919a'
                        key: {
                            name: 'x_973795_om_tele_0_prod_svc'
                            element: 'quantity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '614c84adc3c38b10c7f77242b401310c'
                        key: {
                            sys_ui_section: {
                                id: '1d4c84adc3c38b10c7f77242b4013101'
                                key: {
                                    name: 'x_973795_om_tele_0_prod_offer'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '61ab7ac9d09f4a97bf7d6b927de410f6'
                        key: {
                            sys_security_acl: '5147df0697f64e89b198540768a606f3'
                            sys_user_role: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '63b97419e649416cb21f9b456f6d15a5'
                        key: {
                            name: 'x_973795_om_tele_0_prod_offer'
                            element: 'end_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '63edf4b43bdb44b1bcd112f58c1c720e'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'line_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '645098b1ff1a402a95dc05d0290e09f6'
                        key: {
                            sys_security_acl: '6e26f848855c48629fd0a9289b8d0061'
                            sys_user_role: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '64c12e118b6e4ae3a5f15fcfc5ba9418'
                        key: {
                            sys_security_acl: '525561553b4e4c1998bc861094cd4470'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '654c84adc3c38b10c7f77242b4013109'
                        key: {
                            sys_ui_section: {
                                id: '1d4c84adc3c38b10c7f77242b4013101'
                                key: {
                                    name: 'x_973795_om_tele_0_prod_offer'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'end_date'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '654c84adc3c38b10c7f77242b4013169'
                        key: {
                            sys_ui_section: {
                                id: '1d4c84adc3c38b10c7f77242b4013101'
                                key: {
                                    name: 'x_973795_om_tele_0_prod_offer'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '15'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '656fdc262dc04e139410ccc3f5d1f4f5'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '661a4ac5e8c14c8bb90b6a7ae103c717'
                        key: {
                            sys_security_acl: '63261bcc953e47fdb1094d2ccedb35c7'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '67816399b75c4e3cb62ea98695b8154a'
                        key: {
                            sys_security_acl: 'c9e8fb646e814122907db7af3fd43018'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '67f287c130984148a23660e614a30a42'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'product_spec'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6912fa0756b64f0991b32b139bf22391'
                        key: {
                            name: 'x_973795_om_tele_0_customer'
                            element: 'city'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '694c84adc3c38b10c7f77242b4013166'
                        key: {
                            sys_ui_section: {
                                id: '1d4c84adc3c38b10c7f77242b4013101'
                                key: {
                                    name: 'x_973795_om_tele_0_prod_offer'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'price'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '69570684ade7465fa5b4a7aeda46eb60'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'external_ref'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '699337b23f5a4e1eaa4df95d017fbaf1'
                        key: {
                            ui_policy: '0bf15e56d6c24e4d909c60de41899ff0'
                            field: 'line_type'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '69fc6f59c3cf4b10c7f77242b4013109'
                        key: {
                            name: 'x_973795_om_tele_0_svc_spec'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6b27556c174845c9b59d309895d07a02'
                        key: {
                            name: 'x_973795_om_tele_0_svc_spec'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '6b4ddde74ff64a728df2dc9130e18ca1'
                        key: {
                            logical_table_name: 'x_973795_om_tele_0_order_line'
                            col_name_string: 'resource_spec'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6ba625fe491a4c879806d28e003b3edc'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'resource_spec'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '6bc5809f83d44169bdb462de11366eb0'
                        key: {
                            name: 'x_973795_om_tele_0_prod_offer'
                            element: 'currency'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6bfb32cf2fc34da8879f95d4b2e4bdb9'
                        key: {
                            sys_security_acl: '34178769ffe1440a8f781600fdc9cae4'
                            sys_user_role: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6c1b31ef171145369120adbe99288603'
                        key: {
                            name: 'x_973795_om_tele_0_prod_offer'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6c4ffca23d0e4141aefb8a414effbf2a'
                        key: {
                            sys_security_acl: '6a8bd62929304288b8e4f463d71c70c3'
                            sys_user_role: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6c78be732e5048348cb8f521755d1848'
                        key: {
                            name: 'x_973795_om_tele_0_char_val'
                            element: 'value'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '6cd694eaf25c44e7a40e99d310cd8e22'
                        key: {
                            logical_table_name: 'x_973795_om_tele_0_order_log'
                            col_name_string: 'order_line'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6d490c17d0d94d41806e70d4a3a75a9f'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'fulfillment_state'
                            value: 'failed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6e3e4ed257804cd2afbfaefc2f4d69c3'
                        key: {
                            sys_security_acl: '8f4d19345228470da0f479c76b488101'
                            sys_user_role: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6e63719d0cd74978b45af28d40748a6d'
                        key: {
                            name: 'x_973795_om_tele_0_customer'
                            element: 'customer_type'
                            value: 'business'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6e71f6aed5214d44a926b3481b1b54fa'
                        key: {
                            name: 'x_973795_om_tele_0_prod_spec'
                            element: 'product_type'
                            value: 'mobile'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6e751fa9787a4b49981c0481387763e9'
                        key: {
                            sys_security_acl: 'cb2b6b16e20c454fb2bc40c09aa2e834'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '6e9bc1fc9e46472da7519500feb7629c'
                        key: {
                            logical_table_name: 'x_973795_om_tele_0_prod_char'
                            col_name_string: 'product_spec'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6f36785e52a543f190ea7d3e2d2775f4'
                        key: {
                            sys_security_acl: '3e84374343b74715b9d471b92d88ffc6'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6f5bbd0e54aa47979f22d884c3f3567f'
                        key: {
                            sys_security_acl: '1322196cd7004744b6973a6b736a31d3'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '70ea12a4b5274290812ad0b86ba5dd75'
                        key: {
                            sys_security_acl: '230b4f0f335a425ba5543df445253deb'
                            sys_user_role: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '71239afe9d5b4114926053ad17985d17'
                        key: {
                            sys_security_acl: '369457e542434c6cb66adb2c74c15484'
                            sys_user_role: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '71b0831b6f614b73b7786342ffefa854'
                        key: {
                            ui_policy: '3abf043efcf74b5b9d05f91dfd4a11fc'
                            field: 'customer'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '73342e23d0254753a39f04f2e3679b03'
                        key: {
                            name: 'x_973795_om_tele_0_svc_spec'
                            element: 'status'
                            value: 'retired'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '743d6d11de9846cabf1f13180da1ddb0'
                        key: {
                            name: 'x_973795_om_tele_0_customer'
                            element: 'address'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '74cbe9799f9345bf9187068bafffbccb'
                        key: {
                            name: 'x_973795_om_tele_0_char_val'
                            element: 'characteristic'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '757b2528cd134a1ba9ae8e61b3e9be71'
                        key: {
                            name: 'x_973795_om_tele_0_svc_spec'
                            element: 'status'
                            value: 'draft'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '76009ea8da224ffb8d4e17416cdcbb57'
                        key: {
                            name: 'x_973795_om_tele_0_customer'
                            element: 'city'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '77152b292c614fa1a2d0e086f6630a37'
                        key: {
                            logical_table_name: 'x_973795_om_tele_0_order_line'
                            col_name_string: 'prod_offering'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '77d4d28d95e44e6e8cb53d68505e865c'
                        key: {
                            name: 'x_973795_om_tele_0_order_log'
                            element: 'payload'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '77dc9127abce44779d64811027c0e63e'
                        key: {
                            sys_security_acl: 'c53650652bb84874b0363009cffe87f3'
                            sys_user_role: {
                                id: '872f87569a934c2eb58e31b00ca6c628'
                                key: {
                                    name: 'x_973795_om_tele_0.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '791b44bb0bbd4040b18e98a39f5f25a4'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'service_spec'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7ab4f8c43b064941a9192780ef9204ed'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'customer'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7afd4fa872b24add8ac7580c82967434'
                        key: {
                            name: 'x_973795_om_tele_0_order_log'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7be067d804044291923fc58972c12a4f'
                        key: {
                            name: 'x_973795_om_tele_0_prod_spec'
                            element: 'effective_to'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7bf31e67307c4b5ab281557e26fa1385'
                        key: {
                            sys_security_acl: 'b30bfa81067d4a798687fd56971701bc'
                            sys_user_role: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7c4d5e8d638a4a1aa34f5628844b7e9c'
                        key: {
                            name: 'x_973795_om_tele_0_svc_res'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7e44cfd5901a4bafa76163946dcca6ad'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'line_type'
                            value: 'service'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7eb58408d9bb4ba885b9cbb2a4d92ba8'
                        key: {
                            sys_security_acl: '02447320b743421f8fe31ef946315d83'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7ecaaf7749554103b4b83e9cb53a310d'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'fulfillment_start'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7efa0dac4759460aafdc8647bcab02a9'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'action'
                            value: 'add'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '7f794d0ba093496f926cb95fbc858d5d'
                        key: {
                            category: 'x_973795_om_tele_0_prod_offer'
                            prefix: 'PO'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '7fc1c2e8fed744be8d33aaec4c1d76ac'
                        key: {
                            logical_table_name: 'x_973795_om_tele_0_svc_res'
                            col_name_string: 'service_spec'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7fdea8f189334ac695a4dda1a6004848'
                        key: {
                            sys_security_acl: '86435ce383c34f5aba8dc4973fb0b788'
                            sys_user_role: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '80676c314b9a44c0b922829e4c07a65f'
                        key: {
                            ui_policy: '0bf15e56d6c24e4d909c60de41899ff0'
                            field: 'service_spec'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '808506ea340747bd81a88a57d0f21b0b'
                        key: {
                            name: 'x_973795_om_tele_0_res_spec'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '80ae92ac1c104716912e60289d4631c6'
                        key: {
                            sys_security_acl: 'a8a10abd281d4e57960e88f7c20b013a'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '817bf7496c9b42be899d6c095e834b09'
                        key: {
                            name: 'x_973795_om_tele_0_prod_offer'
                            element: 'price'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '8231152d346e4f4a8e4f00cedd31f6b5'
                        key: {
                            ui_policy: 'fd1a009413824994a1c9ead26c701887'
                            field: 'quantity'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '82cb5818419d425db57e4e685828e59b'
                        key: {
                            sys_security_acl: '5bc8b12ffa8c43acb5ad3eb9a7ac1219'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8461bffbbb8743198be97ee37f697632'
                        key: {
                            name: 'x_973795_om_tele_0_prod_spec'
                            element: 'status'
                            value: 'draft'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '846dbfd9629e4ff6a227207cbdb12a1b'
                        key: {
                            sys_security_acl: 'db844eaf6b414940890faa2774863673'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '84d8bc8f87c24c0fb8379ff928cf2360'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'parent_line'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '84e31e9efb4543b8a35e149f14955bcb'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'state'
                            value: 'in_fulfillment'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8585a61b50b94ddb9e920d90cd4cb32a'
                        key: {
                            name: 'x_973795_om_tele_0_prod_spec'
                            element: 'status'
                            value: 'active'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8666c061dfcb4f18a21077f2421e8626'
                        key: {
                            name: 'x_973795_om_tele_0_order_log'
                            element: 'order'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '869041d8493140168ebeeb81e937e44f'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'error_message'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '871ce77cbfc8425ca2dd5ae0c273966e'
                        key: {
                            name: 'x_973795_om_tele_0_order_log'
                            element: 'order_line'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '872f87569a934c2eb58e31b00ca6c628'
                        key: {
                            name: 'x_973795_om_tele_0.manager'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '87625bc40dde483399077592a4296e52'
                        key: {
                            sys_security_acl: 'eae3f4fc9a534f5b95849b2e7c7db192'
                            sys_user_role: {
                                id: '872f87569a934c2eb58e31b00ca6c628'
                                key: {
                                    name: 'x_973795_om_tele_0.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '8799322c9d714a93bd53002403cbc16b'
                        key: {
                            ui_policy: 'fd1a009413824994a1c9ead26c701887'
                            field: 'product_spec'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '88e169be83d6412fa8a8061f29d6e719'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'fulfillment_state'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '89087b741d04479eab2cd1a13879093d'
                        key: {
                            name: 'x_973795_om_tele_0_svc_res'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '892b0eed7dad48e19f0443636e5a046c'
                        key: {
                            name: 'x_973795_om_tele_0_prod_svc'
                            element: 'service_spec'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '89ec6759c3cf4b10c7f77242b40131e7'
                        key: {
                            name: 'x_973795_om_tele_0_prod_char'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '89fd303cffc8498f9f58f9f2d1eb7144'
                        key: {
                            name: 'x_973795_om_tele_0_res_spec'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '8ab3d0bb7a3c4aad83fd18eb2754c82a'
                        key: {
                            logical_table_name: 'x_973795_om_tele_0_order_line'
                            col_name_string: 'parent_line'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8adaac2a021644f98d94a3404d4bcd7f'
                        key: {
                            sys_security_acl: 'a53ec92167414e86b40209b08736f7fd'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8c3bb793f32b43abb56d13ed9adf83b0'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8cadb1824a6e488c810b782fe01c9e80'
                        key: {
                            name: 'x_973795_om_tele_0_svc_spec'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8d203dc281df47abb3696a31a22aa55e'
                        key: {
                            name: 'x_973795_om_tele_0_res_spec'
                            element: 'resource_type'
                            value: 'subscription'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8d58fc628b2243a5a01b6645e9b2fff0'
                        key: {
                            name: 'x_973795_om_tele_0_customer'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8d601e3b07544358aaa694475ce3e513'
                        key: {
                            name: 'x_973795_om_tele_0_prod_offer'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8db900479df244489278ae456b535034'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'order_type'
                            value: 'suspend'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8dc2f3723dd045c295631b698587f934'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8ff20755931848459fdecf3709bc85a3'
                        key: {
                            sys_security_acl: 'af6ab2f1422d41e38c5b29f2ff10c952'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '9018f643d8fd47edb722e4e0df419033'
                        key: {
                            name: 'x_973795_om_tele_0_prod_offer'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9156235bc6c841b0bc14ea9258da6c93'
                        key: {
                            sys_security_acl: 'ca1860fdf4194d499bb1a74697588624'
                            sys_user_role: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '91eeee70df7845d0922401794079d308'
                        key: {
                            name: 'x_973795_om_tele_0_prod_spec'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '92b0a999e49a4f6db5d1feea69a604db'
                        key: {
                            name: 'x_973795_om_tele_0_prod_offer'
                            element: 'start_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9375b6cc7234486b905f624677e523dd'
                        key: {
                            sys_security_acl: '07a39ceb20ee49a9892424532d2e7559'
                            sys_user_role: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '94ae0cd257704c0c83ac8d5ed9e16827'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'original_order'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '956d5f5be38846a4a6da33881edde7d9'
                        key: {
                            name: 'x_973795_om_tele_0_svc_res'
                            element: 'resource_spec'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '96a4160372834763b945196a98dc5b85'
                        key: {
                            name: 'x_973795_om_tele_0_char_val'
                            element: 'order_line'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '96c82b1cf9654efd81c12715473e10a6'
                        key: {
                            name: 'x_973795_om_tele_0_svc_res'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '97234bc722e44c09a301ee535288a5b2'
                        key: {
                            name: 'x_973795_om_tele_0_prod_spec'
                            element: 'version'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '973048a2f6344b698797c07bc3d2dd4a'
                        key: {
                            name: 'x_973795_om_tele_0_prod_char'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9809f7ed0c98416babb9fb1d77785a81'
                        key: {
                            sys_security_acl: '7560f1d6356b4971867f17e2fd540e5b'
                            sys_user_role: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9825c560fbfa4855989e09d3b454e754'
                        key: {
                            name: 'x_973795_om_tele_0_order_log'
                            element: 'log_level'
                            value: 'error'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '98e3b426e75f4a06a238b009c982a457'
                        key: {
                            name: 'x_973795_om_tele_0_prod_spec'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '99f4aa681a2a4ecc8de93f8047f6836d'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9a6135bf28c84b7e865833e520e93c5d'
                        key: {
                            name: 'x_973795_om_tele_0_order_log'
                            element: 'message'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9b720961638f4dbf99728ef36c12ce71'
                        key: {
                            name: 'x_973795_om_tele_0_prod_spec'
                            element: 'product_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9bd7e077b10e457aabc1e10a2f0a28ba'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9c6759920465490fb631305e76e7414b'
                        key: {
                            name: 'x_973795_om_tele_0_order_log'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '9ce1136621d94a439c1d0f0f9b1f95b2'
                        key: {
                            ui_policy: '0bf15e56d6c24e4d909c60de41899ff0'
                            field: 'action'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '9d1c88bb2afa405a91976cbf2e3cea45'
                        key: {
                            ui_policy: '3abf043efcf74b5b9d05f91dfd4a11fc'
                            field: 'description'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9d504b2642ad41f8b39f36ee55cfc1e6'
                        key: {
                            name: 'x_973795_om_tele_0_svc_spec'
                            element: 'service_type'
                            value: 'ip_connectivity'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '9d8b5b59a88648c4a0a84977bb6b20b1'
                        key: {
                            category: 'x_973795_om_tele_0_prod_spec'
                            prefix: 'PS'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9da295cb95474e65b3ec82311069a4d8'
                        key: {
                            name: 'x_973795_om_tele_0_prod_char'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9de48af938474d5e84023acef264a758'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '9e07f270d0ff4a0789d1dd9c1f9f7f3d'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'line_type'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9e09889389e34fb7b5944f5ac029910d'
                        key: {
                            sys_security_acl: '54ccf06fb66b4c0898b177ff11541894'
                            sys_user_role: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9e3b7fc2735549d6aa7de5ac0c597e6a'
                        key: {
                            name: 'x_973795_om_tele_0_customer'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9e8f3536914a4e48b77cf4c2cb0fce0b'
                        key: {
                            sys_security_acl: '2f31744ad1a046ecbc67d4f00d8829af'
                            sys_user_role: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '9e92d6359e0c4267acb18f2ea764edd8'
                        key: {
                            logical_table_name: 'x_973795_om_tele_0_prod_svc'
                            col_name_string: 'product_spec'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '9edec0b96e4045beb8ac5e5963ee8a39'
                        key: {
                            ui_policy: '79cb80dc75984636aa5682f4b3bbe9c8'
                            field: 'order_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9f9fd6e122954bbdb4d2518e9a58ea78'
                        key: {
                            name: 'x_973795_om_tele_0_res_spec'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9fe96d20fd9b4bd48713c9df08d474e3'
                        key: {
                            sys_security_acl: '7070241963294604b2a7d1f6dba04edb'
                            sys_user_role: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a04839db977f4ba480fb3ad307cc625a'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'order_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a1d551de4d724ec9935a1c4b9fd543ac'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'prod_offering'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ws_query_parameter_map'
                        id: 'a20f1a9638c54e20a0189ff807f8c6c7'
                        key: {
                            web_service_operation: '5f7bcd1f82954b679834d844d3361f44'
                            web_service_query_parameter: '56de6972a44344ef9f0a4d8dcbc1ac79'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'a34ea85fe7a64b53ac0ac43e8fef9aaf'
                        key: {
                            logical_table_name: 'x_973795_om_tele_0_order_line'
                            col_name_string: 'service_spec'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a3b2116110e3402faa78288300de566c'
                        key: {
                            name: 'x_973795_om_tele_0_svc_spec'
                            element: 'status'
                            value: 'active'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a48039d8a7a24090be591eeb8eb95498'
                        key: {
                            sys_security_acl: '8150838516a54115b226d508946c10d9'
                            sys_user_role: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4a658aeb99942059ce5f14c1eb08282'
                        key: {
                            name: 'x_973795_om_tele_0_prod_offer'
                            element: 'currency'
                            value: 'usd'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a4ce2625d11849acb299227779df2504'
                        key: {
                            name: 'x_973795_om_tele_0_customer'
                            element: 'address'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a54c84adc3c38b10c7f77242b401310b'
                        key: {
                            sys_ui_section: {
                                id: '1d4c84adc3c38b10c7f77242b4013101'
                                key: {
                                    name: 'x_973795_om_tele_0_prod_offer'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a5fca28b6ed247289565db3efce9e6df'
                        key: {
                            name: 'x_973795_om_tele_0_customer'
                            element: 'email'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a7b18be9bc2140b3bffa17b129e25ff5'
                        key: {
                            name: 'x_973795_om_tele_0_order_log'
                            element: 'log_level'
                            value: 'debug'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'a7cb18dca5e94b298e99e561ca663ffe'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'a8b0e745ad1d42438292696aab02e7ba'
                        key: {
                            ui_policy: '79cb80dc75984636aa5682f4b3bbe9c8'
                            field: 'requested_date'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a94c84adc3c38b10c7f77242b4013108'
                        key: {
                            sys_ui_section: {
                                id: '1d4c84adc3c38b10c7f77242b4013101'
                                key: {
                                    name: 'x_973795_om_tele_0_prod_offer'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a94c84adc3c38b10c7f77242b4013168'
                        key: {
                            sys_ui_section: {
                                id: '1d4c84adc3c38b10c7f77242b4013101'
                                key: {
                                    name: 'x_973795_om_tele_0_prod_offer'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'status'
                            position: '14'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a9b278dff3764356ba92737df80bc845'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'aa7aa9de982041c68954b38ba1299411'
                        key: {
                            sys_security_acl: '7ae8f4d13446420da03d2ae91a648c8a'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'aac4e1dd2da641ff8c5500f461d10287'
                        key: {
                            name: 'x_973795_om_tele_0_svc_spec'
                            element: 'version'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ab9541399f424a36be066ac3349272c6'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'requested_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ab9edbc34a234ff78f04dbe7067a99a4'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'fulfillment_seq'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'abdd42c9809b49519ae693f2a5ed054b'
                        key: {
                            sys_security_acl: '626a80eabc58414eaa9f03bc385211af'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'ac3a4353ca4049048168389b69c0dc11'
                        key: {
                            name: 'x_973795_om_tele_0_prod_svc'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ac74fdec0c7f4e99b0cbd6f5c6c6ae0f'
                        key: {
                            sys_security_acl: '08e10a95d9da4df0abdadb0e66c71ce8'
                            sys_user_role: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ac7eba5de3db4203880aa40757acbe67'
                        key: {
                            name: 'x_973795_om_tele_0_prod_spec'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ac8bcad882a24c94928407e5ba9beaee'
                        key: {
                            sys_security_acl: '0c6a680e0e174a0394adccb086e404b4'
                            sys_user_role: {
                                id: '872f87569a934c2eb58e31b00ca6c628'
                                key: {
                                    name: 'x_973795_om_tele_0.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ad4c84adc3c38b10c7f77242b4013165'
                        key: {
                            sys_ui_section: {
                                id: '1d4c84adc3c38b10c7f77242b4013101'
                                key: {
                                    name: 'x_973795_om_tele_0_prod_offer'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'product_spec'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ad4cb25c05cc4ef895491d311268751f'
                        key: {
                            sys_security_acl: 'd03a6b05b3684de0917c5730e9997e63'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ae305a57c23f46d3ae2d4b1cdbc1db6d'
                        key: {
                            sys_security_acl: '56fa5baa11314a998413b506a19207d2'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ae510f5642b74d17ac7b4bf4af898ec1'
                        key: {
                            name: 'x_973795_om_tele_0_prod_offer'
                            element: 'status'
                            value: 'retired'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'aee49c6dfd094fec8f6f8e6a69dff345'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'completed_date'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'af7e873d8b6a4b9582a580e626b2a69d'
                        key: {
                            sys_security_acl: 'fe66bb32b9684215a8e717da04219bca'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'b04de1dc4d6546339c6c547552e5d6f3'
                        key: {
                            role: {
                                id: '872f87569a934c2eb58e31b00ca6c628'
                                key: {
                                    name: 'x_973795_om_tele_0.manager'
                                }
                            }
                            contains: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b079c73f635e42d4b0c23eddecf06c8d'
                        key: {
                            name: 'x_973795_om_tele_0_order_log'
                            element: 'external_ref'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b08be93560b74dbeb69cb150f9b963e4'
                        key: {
                            name: 'x_973795_om_tele_0_prod_char'
                            element: 'mandatory'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b120c3f407fb48bdbbee397ceb2968b4'
                        key: {
                            sys_security_acl: 'cc49b8a573d2489596d873ec13e4b676'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b1d436cf254b4c05b215650b8c156c3a'
                        key: {
                            name: 'x_973795_om_tele_0_res_spec'
                            element: 'resource_type'
                            value: 'identifier'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b1de8a6abd3148fcb1878db426842303'
                        key: {
                            name: 'x_973795_om_tele_0_prod_offer'
                            element: 'currency'
                            value: 'gbp'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: 'b1f2e858d0024ea48842b3d6334a32f8'
                        key: {
                            id: 'omt_home'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b226cb2ef7c04f4b869ff7c5271c31ff'
                        key: {
                            name: 'x_973795_om_tele_0_prod_offer'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b296292d01884b26bc076bdbac6145dc'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'order_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b31bfcf9c5894bb7a209a9d275b0d210'
                        key: {
                            name: 'x_973795_om_tele_0_svc_spec'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b3ef8db08d4a439ebff4817c54311220'
                        key: {
                            name: 'x_973795_om_tele_0_prod_svc'
                            element: 'quantity'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'b4d966433c7f4e909d2d7aebfe7af88f'
                        key: {
                            category: 'x_973795_om_tele_0_order_line'
                            prefix: 'OL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b52367e5b8274275b4f4223075e25f6e'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b68db68914a147569436776554d5bac0'
                        key: {
                            name: 'x_973795_om_tele_0_prod_spec'
                            element: 'product_type'
                            value: 'broadband'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b71cf2709bee47349b768b3fcbeb0b05'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b754daef21be413880fe27cbb107cc01'
                        key: {
                            name: 'x_973795_om_tele_0_res_spec'
                            element: 'resource_type'
                            value: 'ip'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'b7cc6f19c3cf4b10c7f77242b40131c9'
                        key: {
                            name: 'x_973795_om_tele_0_char_val'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b9c36c1f16704a90b1ba86a19937f9f5'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'state'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'b9dc2359c3cf4b10c7f77242b401314f'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ba8f92e25f824e32b7842b84df3faa14'
                        key: {
                            sys_security_acl: '1e4a4593b51e4949870c9343a9fcd9a3'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bad565d772ea435897b4e86f2178d4d5'
                        key: {
                            name: 'x_973795_om_tele_0_prod_offer'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bb70662f2e32424fbc8de722cd014a82'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bb959f8818ec43af9be0d7c0da4a0851'
                        key: {
                            sys_security_acl: 'ea1cbe6f46af4c378fc52aa3e8b8d9f4'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bbe3e657bf6f461ca20774c162e2479b'
                        key: {
                            sys_security_acl: '3326b357d2454f828875dd8753dc0e11'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bbfa2e8e51d54e3298be7b304309aa5d'
                        key: {
                            sys_security_acl: 'bb807cb31889469cb1f990e6adb8a693'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bcfe60a5b50a48178cec781d335e0593'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'order_type'
                            value: 'new'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bd005e06e2e54f58ac4a6f26632bba41'
                        key: {
                            name: 'x_973795_om_tele_0_res_spec'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: 'be65040f9d5d45188ce03be11af3491d'
                        key: {
                            table: 'x_973795_om_tele_0_order'
                            short_description: 'Show and require original order when order type is amend'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bf1f7c6d8e5a4718a88aeca37e1cdab7'
                        key: {
                            name: 'x_973795_om_tele_0_prod_spec'
                            element: 'product_type'
                            value: 'voice'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'bff7390fa32c4dfabc9fa8adb3b878f1'
                        key: {
                            name: 'x_973795_om_tele_0_prod_offer'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c0645995dc744e0ab51aca750fbd2817'
                        key: {
                            sys_security_acl: '1658c44fcc68428f8c480a994165fb68'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c073372e645345b8b03d204d699daecf'
                        key: {
                            sys_security_acl: 'ca8d9dc3ed39471fac0a53953d4f643c'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c0a0bb05c96f4a50bf4a10dd3de5485f'
                        key: {
                            name: 'x_973795_om_tele_0_prod_char'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c0b2f36f8fab40b582c4c9200664fbac'
                        key: {
                            name: 'x_973795_om_tele_0_prod_offer'
                            element: 'product_spec'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c1b681ad14ef4e89bb9d5a6ccaecf63f'
                        key: {
                            sys_security_acl: 'e94bb029ebf142f4aa4f1e36975819c0'
                            sys_user_role: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c23cd722972a432f848291f4b14c1709'
                        key: {
                            name: 'x_973795_om_tele_0_order_log'
                            element: 'source'
                        }
                    },
                    {
                        table: 'sys_ws_query_parameter_map'
                        id: 'c2618aaba9b64f3b8cfa9643ca5821d4'
                        key: {
                            web_service_operation: '34f3b2adb86a4b3083795a2069602098'
                            web_service_query_parameter: 'b3a912b8c7fb4c44807d013a37c5dcea'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c3521b2b0c754f8d8fe2ae3343771765'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'state'
                            value: 'submitted'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c3cef059edee40c695995a7406a38d12'
                        key: {
                            name: 'x_973795_om_tele_0_res_spec'
                            element: 'status'
                            value: 'draft'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'c42353020b994c9e8d16e3c6c9d8386e'
                        key: {
                            logical_table_name: 'x_973795_om_tele_0_order'
                            col_name_string: 'customer'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c4c0e519272144ee8a2d57f84b4e8093'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'fulfillment_state'
                            value: 'completed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'c4fceb59c3cf4b10c7f77242b401311c'
                        key: {
                            name: 'x_973795_om_tele_0_res_spec'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c5253a33937142c488f8ade2437cd109'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'action'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c65bf4c20bc24dd693c7d5acbd0264a7'
                        key: {
                            sys_security_acl: 'b0400b6e19a349a492c95f025b2005d8'
                            sys_user_role: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'c677b65817d84d388d1dbda8772c5a77'
                        key: {
                            ui_policy: '0bf15e56d6c24e4d909c60de41899ff0'
                            field: 'quantity'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c6cce196399047db902ec0d119c6af10'
                        key: {
                            name: 'x_973795_om_tele_0_order_log'
                            element: 'message'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c6d2bc8be31a42d68be255b77af65808'
                        key: {
                            name: 'x_973795_om_tele_0_prod_char'
                            element: 'char_type'
                            value: 'number'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'c76d638a8ae0450084bf3a871688b517'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c7d17f8241b3418ab3b5630ea7dde8a8'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'service_spec'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c89551dd3463463fb0d1a31154fb4fbe'
                        key: {
                            name: 'x_973795_om_tele_0_res_spec'
                            element: 'resource_type'
                            value: 'cpe'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c971005c21cc48a693a74fca1197bf4a'
                        key: {
                            name: 'x_973795_om_tele_0_prod_char'
                            element: 'char_type'
                            value: 'string'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ca099829e8ab4d2daea5411fbfaa18a1'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ca90d762577d4b69800569d48ca7a260'
                        key: {
                            name: 'x_973795_om_tele_0_svc_res'
                            element: 'quantity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'cb74dcb0cd40404ab2d548b43b73e093'
                        key: {
                            name: 'x_973795_om_tele_0_char_val'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cbaecf12c55144ea87cbb1328caafac2'
                        key: {
                            name: 'x_973795_om_tele_0_prod_spec'
                            element: 'effective_from'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'cbb90df0f5544fb99f84134d11de0ad9'
                        key: {
                            category: 'x_973795_om_tele_0_res_spec'
                            prefix: 'RS'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cc162af298054920bb955fc4c562bf05'
                        key: {
                            name: 'x_973795_om_tele_0_prod_spec'
                            element: 'version'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cc62e8bb82484f7da15c391d67b81f8a'
                        key: {
                            name: 'x_973795_om_tele_0_char_val'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'cd883eefb24640a3a1523b764a4a6f76'
                        key: {
                            name: 'x_973795_om_tele_0_res_spec'
                            element: 'resource_type'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'cea03f91e06949b783a3bab20ff1e2b4'
                        key: {
                            sys_security_acl: '3bf3e2f62664472ea2f715a57e18737e'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ws_query_parameter_map'
                        id: 'cf0eeac7e6354d439deacb5397cc5325'
                        key: {
                            web_service_operation: '5f7bcd1f82954b679834d844d3361f44'
                            web_service_query_parameter: '6ffa93227f384578807eecd74719eb98'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'cfccdea09cc547e48242d250cfe96ea9'
                        key: {
                            sys_security_acl: '40b674b5c5c34d2c98a5439969ff05cb'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd007bfa9660c4d0a9831f11e79866bf2'
                        key: {
                            sys_security_acl: 'cbfbe23527164814b957ac2b6005e5b4'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd12cc468e6684578bc6ef76eb5310555'
                        key: {
                            name: 'x_973795_om_tele_0_prod_char'
                            element: 'mandatory'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd151854cb3544a778c7037283c78d7e7'
                        key: {
                            name: 'x_973795_om_tele_0_char_val'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd156d4d1457849f991a89a4caa829071'
                        key: {
                            name: 'x_973795_om_tele_0_prod_svc'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd1880e45c7be42c2913cd28a5f13a8cd'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'state'
                            value: 'in_progress'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'd1ef645226aa451787db23a11f645851'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'order_type'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'd4287e50b3d7470db655fec514aaa26c'
                        key: {
                            ui_policy: 'fd1a009413824994a1c9ead26c701887'
                            field: 'service_spec'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'd47972598c0d4d50b82483d9a07c609b'
                        key: {
                            ui_policy: 'fd1a009413824994a1c9ead26c701887'
                            field: 'resource_spec'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'd6744c90bde54f5dba5aaf20a8e34f9c'
                        key: {
                            ui_policy: '79cb80dc75984636aa5682f4b3bbe9c8'
                            field: 'description'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd6f718b4caec4ca9867c210b7a0d70b8'
                        key: {
                            sys_security_acl: 'f5d9b71d62a44c11b7e09b9eac3f8014'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd7d0a9b1a67443aea722d881aa390724'
                        key: {
                            name: 'x_973795_om_tele_0_prod_char'
                            element: 'sequence'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd86d3c37f54146afa7ef15583d776a26'
                        key: {
                            name: 'x_973795_om_tele_0_res_spec'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd8c4b539561a46e498b044328558fb87'
                        key: {
                            name: 'x_973795_om_tele_0_order_log'
                            element: 'source'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'da038a9cf2bb479b9f3c00252bd5abf2'
                        key: {
                            logical_table_name: 'x_973795_om_tele_0_order_line'
                            col_name_string: 'order'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'da48d00d106f422a99255ef92e2a8453'
                        key: {
                            name: 'x_973795_om_tele_0_prod_spec'
                            element: 'product_type'
                            value: 'data'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'da8160f63059484aab49c0126b413227'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'action'
                            value: 'modify'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dabd23c32e924acb8598aff35b687cc7'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'fulfillment_end'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'daf57b06046b4783b5f1a37f8923d086'
                        key: {
                            name: 'x_973795_om_tele_0_prod_svc'
                            element: 'service_spec'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'db0cd11de5424e11a63ee84893f5d765'
                        key: {
                            name: 'x_973795_om_tele_0_customer'
                            element: 'customer_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'db15a439bbe04a84b649ea68763ef712'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'correlation_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'db64f3a8222f4e269d04b7940ffa0700'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'fulfillment_start'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'dbec8abd557848a2a0f49f42a62ba052'
                        key: {
                            sys_security_acl: '318b6037de9648d28624ef6289a5852e'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dc81c2c0f37e49ce8dd87acdee0fae56'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'completed_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'de7729453883482aa3d6107860c4c5fe'
                        key: {
                            name: 'x_973795_om_tele_0_svc_spec'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dee0ed86f51a491b8f10595b679d2223'
                        key: {
                            name: 'x_973795_om_tele_0_customer'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'deed9c9c1963451485a1335b0b1b99b3'
                        key: {
                            sys_security_acl: '7360958ded534617b25b5ae26e4e77ed'
                            sys_user_role: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'def49c5e0f4946e79a8b04500848fe4c'
                        key: {
                            logical_table_name: 'x_973795_om_tele_0_char_val'
                            col_name_string: 'order_line'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'df1a7082fbd5462ba89f9d13513ebdd5'
                        key: {
                            name: 'x_973795_om_tele_0_prod_svc'
                            element: 'sequence'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'df49cbd19fa245e986820a733cdbba93'
                        key: {
                            sys_security_acl: 'b378aa29b5ae4bfcbde84408769f2be9'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'df766727977a4fe5944db842ee9cc814'
                        key: {
                            name: 'x_973795_om_tele_0_svc_spec'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'dfb0a55140a248bea66e5ecc601c34ad'
                        key: {
                            sys_security_acl: 'fce168e5c8674f5ca7a3ff5b975e47bf'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e0195af3ab12447390e8e09efb838b1d'
                        key: {
                            name: 'x_973795_om_tele_0_svc_spec'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'e021c76f27c14833a71874c2001ff58f'
                        key: {
                            ui_policy: 'fd1a009413824994a1c9ead26c701887'
                            field: 'action'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e08cda546d314ee3bf8cc3b2f0acb07b'
                        key: {
                            name: 'x_973795_om_tele_0_svc_spec'
                            element: 'service_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'e0b440290c4f4ca2aee5a6c66aa019fb'
                        key: {
                            category: 'x_973795_om_tele_0_order'
                            prefix: 'ORD'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'e1231fd782774b28bfcedadb4ca86873'
                        key: {
                            name: 'x_973795_om_tele_0_order_log'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e12d6e846ff14b36b3d5ce1c21db0af7'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'state'
                            value: 'completed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e14c84adc3c38b10c7f77242b4013165'
                        key: {
                            sys_ui_section: {
                                id: '1d4c84adc3c38b10c7f77242b4013101'
                                key: {
                                    name: 'x_973795_om_tele_0_prod_offer'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e14e406fdd4844ad8584028b57186b66'
                        key: {
                            name: 'x_973795_om_tele_0_prod_char'
                            element: 'sequence'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'e1ece759c3cf4b10c7f77242b401313e'
                        key: {
                            name: 'x_973795_om_tele_0_prod_offer'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e26ba4ec720a45f8a04684ce07f60588'
                        key: {
                            sys_security_acl: '468354760d9940c385786c7b1437a9f3'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e30e3efca2b945958031f93444f501fc'
                        key: {
                            name: 'x_973795_om_tele_0_prod_spec'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e34c9377be6941fbb5bb116d0a0f4e5a'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'order'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e376b3726b594dc4a347c93c1a387d36'
                        key: {
                            name: 'x_973795_om_tele_0_customer'
                            element: 'phone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e3ad79d8a6114f808597b86c3660ad6d'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'parent_line'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e3dfe398faaa40f8a592614e88a9a6e7'
                        key: {
                            name: 'x_973795_om_tele_0_prod_svc'
                            element: 'product_spec'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e42d65e91c694fa28d271b412cc42d84'
                        key: {
                            name: 'x_973795_om_tele_0_prod_svc'
                            element: 'mandatory'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'e4dcaf19c3cf4b10c7f77242b40131af'
                        key: {
                            name: 'x_973795_om_tele_0_customer'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'e4f39dfd761b497d983a701b930442d5'
                        key: {
                            ui_policy: '0bf15e56d6c24e4d909c60de41899ff0'
                            field: 'product_spec'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e5083d9687164ca19799dc078c66943a'
                        key: {
                            name: 'x_973795_om_tele_0_prod_spec'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e52e8959ebb246758492787993c24ea4'
                        key: {
                            name: 'x_973795_om_tele_0_customer'
                            element: 'customer_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e541f50f3ac24a72b0c665bf2608ff31'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'state'
                            value: 'cancelled'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e582ea53bdec486187b1cf51ed5aaa82'
                        key: {
                            name: 'x_973795_om_tele_0_order_log'
                            element: 'order_line'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e5911ebddb9c4465998598196abf3d55'
                        key: {
                            name: 'x_973795_om_tele_0_svc_spec'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'e63e75a29d70445c9997b2df46c19106'
                        key: {
                            name: 'x_973795_om_tele_0_prod_spec'
                            element: 'product_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e6b8ed43004b4da0b1cdc5132b4a3f59'
                        key: {
                            name: 'x_973795_om_tele_0_svc_spec'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e7828459f18d40f8af51c5a5385aefa3'
                        key: {
                            name: 'x_973795_om_tele_0_char_val'
                            element: 'value'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e7bbe9888e1a4bcdaeaa6b41ac03857b'
                        key: {
                            name: 'x_973795_om_tele_0_prod_offer'
                            element: 'price'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e7c15f1fda81442cb11fc7b04653dd77'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'action'
                            value: 'no_change'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e8319b2357294507b4ee7287aa0d927c'
                        key: {
                            sys_security_acl: 'effb87f12fcd41a6a4fcfd1f6f05006c'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e927d00e69a24064bd2df60cabca7e36'
                        key: {
                            name: 'x_973795_om_tele_0_svc_spec'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e94c84adc3c38b10c7f77242b401310a'
                        key: {
                            sys_ui_section: {
                                id: '1d4c84adc3c38b10c7f77242b4013101'
                                key: {
                                    name: 'x_973795_om_tele_0_prod_offer'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'currency'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e9500d483ca34976a679f6759b9aec1f'
                        key: {
                            name: 'x_973795_om_tele_0_res_spec'
                            element: 'resource_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e9abac1858b54fb3891cc5177be4e8d8'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'fulfillment_seq'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e9ccbdd086bc4250bc5887d797c65559'
                        key: {
                            sys_security_acl: '313b3cbecab54ac397f9b8ab9047a969'
                            sys_user_role: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e9dab41be9c54ad69798332a587dad92'
                        key: {
                            name: 'x_973795_om_tele_0_customer'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'eade05290b2a4df8b2cd7bfcd966251a'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'requested_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ebc2c23c22af4a5fbcf58982d2c7465c'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'original_order'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ebee0a5a28a2491cb309df4ca49105d4'
                        key: {
                            name: 'x_973795_om_tele_0_prod_spec'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ebf1306173a641cca40af2e6c49a8c2c'
                        key: {
                            name: 'x_973795_om_tele_0_customer'
                            element: 'country'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'ec60c5ddcb2541949f53fa9dcb9eaba0'
                        key: {
                            logical_table_name: 'x_973795_om_tele_0_prod_svc'
                            col_name_string: 'service_spec'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ed29762ce4b346dca043e02a39da5a4f'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'customer'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ed4585c593f24a2fa1f95f4b057a5b93'
                        key: {
                            name: 'x_973795_om_tele_0_customer'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ed4c84adc3c38b10c7f77242b4013167'
                        key: {
                            sys_ui_section: {
                                id: '1d4c84adc3c38b10c7f77242b4013101'
                                key: {
                                    name: 'x_973795_om_tele_0_prod_offer'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'start_date'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ee341a5ea66a4579b470ebdd556014d5'
                        key: {
                            name: 'x_973795_om_tele_0_svc_res'
                            element: 'resource_spec'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'ee87b67a640b4da7805325ad265bddc7'
                        key: {
                            logical_table_name: 'x_973795_om_tele_0_prod_offer'
                            col_name_string: 'product_spec'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'eec7ce24e8e843feb543b2a1e93c7865'
                        key: {
                            sys_security_acl: '2d1a2e5c530341e38f7d6259513774ab'
                            sys_user_role: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'eeef9d5d416c487fb82e10726d608f79'
                        key: {
                            name: 'x_973795_om_tele_0_res_spec'
                            element: 'status'
                            value: 'retired'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ef5d4c7f3d9d4b42b52744330202c6ff'
                        key: {
                            sys_security_acl: '2b770096d4764c3084dcb5486e98324e'
                            sys_user_role: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ef9cbd46305a4e3397edb3a5c16345ff'
                        key: {
                            name: 'x_973795_om_tele_0_prod_offer'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f0461e31ec0c49419045372ada5f7e65'
                        key: {
                            name: 'x_973795_om_tele_0_svc_res'
                            element: 'quantity'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f053a667b1c6437ab442e3c0fab8610b'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'fulfillment_end'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f135fe7fd1ba4fd3aa6894408cec6530'
                        key: {
                            name: 'x_973795_om_tele_0_prod_char'
                            element: 'default_value'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f1a3b3a4d1ab419a9a1f9e1f08c4c2e9'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_ws_query_parameter_map'
                        id: 'f298077a7c01470097db048768c048c6'
                        key: {
                            web_service_operation: '0ad7a64b96884afa909c1021e5aa9d03'
                            web_service_query_parameter: '0d02f135f1254c5393c8636032c812ea'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f3b3b2f2c9c645d69565752de93aa403'
                        key: {
                            name: 'x_973795_om_tele_0_prod_spec'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f47558e1596848f0b0b2aef67db2eb35'
                        key: {
                            sys_security_acl: '62bd225b76d04840ae8f567182eafc30'
                            sys_user_role: {
                                id: '0d08ece03e174c85a18ccaa95bebc01c'
                                key: {
                                    name: 'x_973795_om_tele_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f4eb326c69354fc29a266cab2762c056'
                        key: {
                            name: 'x_973795_om_tele_0_svc_spec'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'f532a60ecda04d1a927476ea3ff8d6ac'
                        key: {
                            logical_table_name: 'x_973795_om_tele_0_svc_res'
                            col_name_string: 'resource_spec'
                        }
                    },
                    {
                        table: 'sys_ws_query_parameter_map'
                        id: 'f5c87dbfb4b0427d8ef3a17a467391fc'
                        key: {
                            web_service_operation: '5f7bcd1f82954b679834d844d3361f44'
                            web_service_query_parameter: '7f963f690490434bb3150e777d7c1459'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f5ce0d58220b421b8fc525111321e9d0'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'state'
                            value: 'failed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f60b15369dcd4e52b416cb7378b81694'
                        key: {
                            name: 'x_973795_om_tele_0_prod_char'
                            element: 'char_type'
                            value: 'choice'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f661b2ba04464dbcaee97ffc0f5c3958'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'order_type'
                            value: 'modify'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f6b2ce9eab8e45b28048f753afd5d410'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'resource_spec'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f8fd912725b6410fb9535f63365e920d'
                        key: {
                            name: 'x_973795_om_tele_0_prod_char'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f919ee80b1ac44ddaad33052d11a34b3'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'state'
                            value: 'decomposing'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fa504034eb3340feaf665eacce1060f0'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'state'
                            value: 'completed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fae0c7c8270d457ba46e197e240e306d'
                        key: {
                            name: 'x_973795_om_tele_0_prod_char'
                            element: 'default_value'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fcca0dff76144fd993562acb7cdf52d5'
                        key: {
                            name: 'x_973795_om_tele_0_order_log'
                            element: 'response'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fd6a0028d935460495946ae909a12859'
                        key: {
                            sys_security_acl: '491dadd232a2453a9d9faf259d0cb087'
                            sys_user_role: {
                                id: '29fd436fdb134a4b805ec5d83a74b9b7'
                                key: {
                                    name: 'x_973795_om_tele_0.agent'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'fd9a0b3669f24e82acae1cc891fffa8e'
                        key: {
                            logical_table_name: 'x_973795_om_tele_0_order'
                            col_name_string: 'original_order'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'fde0bc6d1fed45e78ca784d7998f8185'
                        key: {
                            name: 'x_973795_om_tele_0_order_log'
                            element: 'log_level'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fe0c47868ddf4dda9aec3c5588918c60'
                        key: {
                            name: 'x_973795_om_tele_0_char_val'
                            element: 'old_value'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fe1c6f5e3f1c443fa367b47aff0be91f'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'action'
                            value: 'delete'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fe389a7ecee64687b62e893ca67925b6'
                        key: {
                            name: 'x_973795_om_tele_0_order_log'
                            element: 'log_level'
                            value: 'warning'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fe8255ef77a04a4ebf10eaeef956ed79'
                        key: {
                            name: 'x_973795_om_tele_0_order_line'
                            element: 'product_spec'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ff1126c7ff304775a84218176bc51141'
                        key: {
                            name: 'x_973795_om_tele_0_prod_svc'
                            element: 'mandatory'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ff984c2c0ea34644bc7df07586d303ed'
                        key: {
                            name: 'x_973795_om_tele_0_prod_spec'
                            element: 'product_type'
                            value: 'vpn'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fffb98eabdc6493ea6253ffe42190af6'
                        key: {
                            name: 'x_973795_om_tele_0_order'
                            element: 'correlation_id'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}
