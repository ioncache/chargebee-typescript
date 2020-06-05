import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class Customer extends Model {
  public id: string;
  public first_name?: string;
  public last_name?: string;
  public email?: string;
  public phone?: string;
  public company?: string;
  public vat_number?: string;
  public auto_collection: string;
  public net_term_days: number;
  public vat_number_validated_time?: number;
  public vat_number_status?: string;
  public allow_direct_debit: boolean;
  public is_location_valid?: boolean;
  public created_at: number;
  public created_from_ip?: string;
  public exemption_details?: any;
  public taxability?: string;
  public entity_code?: string;
  public exempt_number?: string;
  public resource_version?: number;
  public updated_at?: number;
  public locale?: string;
  public consolidated_invoicing?: boolean;
  public billing_date?: number;
  public billing_date_mode?: string;
  public billing_day_of_week?: string;
  public billing_day_of_week_mode?: string;
  public pii_cleared?: string;
  public card_status?: string;
  public fraud_flag?: string;
  public primary_payment_source_id?: string;
  public backup_payment_source_id?: string;
  public billing_address?: resources.CustomerBillingAddress;
  public referral_urls?: Array<resources.CustomerReferralUrl>;
  public contacts?: Array<resources.CustomerContact>;
  public payment_method?: resources.CustomerPaymentMethod;
  public invoice_notes?: string;
  public preferred_currency_code?: string;
  public promotional_credits: number;
  public unbilled_charges: number;
  public refundable_credits: number;
  public excess_payments: number;
  public balances?: Array<resources.CustomerBalance>;
  public meta_data?: any;
  public deleted: boolean;
  public registered_for_gst?: boolean;
  public customer_type?: string;
  public business_customer_without_vat_number?: boolean;
  public client_profile_id?: string;
  public relationship?: resources.CustomerRelationship;
  public use_default_hierarchy_settings?: boolean;
  public parent_account_access?: resources.CustomerParentAccountAccess;
  public child_account_access?: resources.CustomerChildAccountAccess;

  

  // OPERATIONS
  //-----------

  public static create(params?: _customer.create_params) {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/customers',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static list(params?: _customer.customer_list_params) {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/customers',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, ChargeBee._env)
  }

  public static retrieve(customer_id: string, params?: any) {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/customers',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static update(customer_id: string, params?: _customer.update_params) {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'update',
      'httpMethod': 'POST',
      'urlPrefix': '/customers',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static update_payment_method(customer_id: string, params?: _customer.update_payment_method_params) {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'update_payment_method',
      'httpMethod': 'POST',
      'urlPrefix': '/customers',
      'urlSuffix': '/update_payment_method',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static update_billing_info(customer_id: string, params?: _customer.update_billing_info_params) {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'update_billing_info',
      'httpMethod': 'POST',
      'urlPrefix': '/customers',
      'urlSuffix': '/update_billing_info',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static contacts_for_customer(customer_id: string, params?: any) {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'contacts_for_customer',
      'httpMethod': 'GET',
      'urlPrefix': '/customers',
      'urlSuffix': '/contacts',
      'hasIdInUrl': true,
      'isListReq': true,
    }, ChargeBee._env)
  }

  public static assign_payment_role(customer_id: string, params?: _customer.assign_payment_role_params) {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'assign_payment_role',
      'httpMethod': 'POST',
      'urlPrefix': '/customers',
      'urlSuffix': '/assign_payment_role',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static add_contact(customer_id: string, params?: _customer.add_contact_params) {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'add_contact',
      'httpMethod': 'POST',
      'urlPrefix': '/customers',
      'urlSuffix': '/add_contact',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static update_contact(customer_id: string, params?: _customer.update_contact_params) {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'update_contact',
      'httpMethod': 'POST',
      'urlPrefix': '/customers',
      'urlSuffix': '/update_contact',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static delete_contact(customer_id: string, params?: _customer.delete_contact_params) {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'delete_contact',
      'httpMethod': 'POST',
      'urlPrefix': '/customers',
      'urlSuffix': '/delete_contact',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static add_promotional_credits(customer_id: string, params?: _customer.add_promotional_credits_params) {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'add_promotional_credits',
      'httpMethod': 'POST',
      'urlPrefix': '/customers',
      'urlSuffix': '/add_promotional_credits',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static deduct_promotional_credits(customer_id: string, params?: _customer.deduct_promotional_credits_params) {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'deduct_promotional_credits',
      'httpMethod': 'POST',
      'urlPrefix': '/customers',
      'urlSuffix': '/deduct_promotional_credits',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static set_promotional_credits(customer_id: string, params?: _customer.set_promotional_credits_params) {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'set_promotional_credits',
      'httpMethod': 'POST',
      'urlPrefix': '/customers',
      'urlSuffix': '/set_promotional_credits',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static record_excess_payment(customer_id: string, params?: _customer.record_excess_payment_params) {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'record_excess_payment',
      'httpMethod': 'POST',
      'urlPrefix': '/customers',
      'urlSuffix': '/record_excess_payment',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static collect_payment(customer_id: string, params?: _customer.collect_payment_params) {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'collect_payment',
      'httpMethod': 'POST',
      'urlPrefix': '/customers',
      'urlSuffix': '/collect_payment',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static delete(customer_id: string, params?: _customer.delete_params) {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'delete',
      'httpMethod': 'POST',
      'urlPrefix': '/customers',
      'urlSuffix': '/delete',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static move(params?: _customer.move_params) {
    return new RequestWrapper([params], {
      'methodName': 'move',
      'httpMethod': 'POST',
      'urlPrefix': '/customers',
      'urlSuffix': '/move',
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static change_billing_date(customer_id: string, params?: _customer.change_billing_date_params) {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'change_billing_date',
      'httpMethod': 'POST',
      'urlPrefix': '/customers',
      'urlSuffix': '/change_billing_date',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static merge(params?: _customer.merge_params) {
    return new RequestWrapper([params], {
      'methodName': 'merge',
      'httpMethod': 'POST',
      'urlPrefix': '/customers',
      'urlSuffix': '/merge',
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static clear_personal_data(customer_id: string, params?: any) {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'clear_personal_data',
      'httpMethod': 'POST',
      'urlPrefix': '/customers',
      'urlSuffix': '/clear_personal_data',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static relationships(customer_id: string, params?: _customer.relationships_params) {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'relationships',
      'httpMethod': 'POST',
      'urlPrefix': '/customers',
      'urlSuffix': '/relationships',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static delete_relationship(customer_id: string, params?: any) {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'delete_relationship',
      'httpMethod': 'POST',
      'urlPrefix': '/customers',
      'urlSuffix': '/delete_relationship',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static hierarchy(customer_id: string, params?: _customer.hierarchy_params) {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'hierarchy',
      'httpMethod': 'GET',
      'urlPrefix': '/customers',
      'urlSuffix': '/hierarchy',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static update_hierarchy_settings(customer_id: string, params?: _customer.update_hierarchy_settings_params) {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'update_hierarchy_settings',
      'httpMethod': 'POST',
      'urlPrefix': '/customers',
      'urlSuffix': '/update_hierarchy_settings',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

} // ~Customer



  // REQUEST PARAMS
  //---------------

export namespace _customer {
  export interface create_params {
    id?: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    preferred_currency_code?: string;
    phone?: string;
    company?: string;
    auto_collection?: string;
    net_term_days?: number;
    allow_direct_debit?: boolean;
    vat_number?: string;
    registered_for_gst?: boolean;
    taxability?: string;
    exemption_details?: any;
    customer_type?: string;
    client_profile_id?: string;
    taxjar_exemption_category?: string;
    business_customer_without_vat_number?: boolean;
    locale?: string;
    entity_code?: string;
    exempt_number?: string;
    meta_data?: any;
    consolidated_invoicing?: boolean;
    token_id?: string;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    created_from_ip?: string;
    invoice_notes?: string;
    card?: card_create_params;
    bank_account?: bank_account_create_params;
    payment_method?: payment_method_create_params;
    payment_intent?: payment_intent_create_params;
    billing_address?: billing_address_create_params;
  }
  export interface customer_list_params {
    limit?: number;
    offset?: string;
    include_deleted?: boolean;
    id?: filter._string;
    first_name?: filter._string;
    last_name?: filter._string;
    email?: filter._string;
    company?: filter._string;
    phone?: filter._string;
    auto_collection?: filter._enum;
    taxability?: filter._enum;
    created_at?: filter._timestamp;
    updated_at?: filter._timestamp;
    "sort_by[asc]"?: string;
    "sort_by[desc]"?: string;
    relationship?: relationship_customer_list_params;
  }
  export interface update_params {
    first_name?: string;
    last_name?: string;
    email?: string;
    preferred_currency_code?: string;
    phone?: string;
    company?: string;
    auto_collection?: string;
    allow_direct_debit?: boolean;
    net_term_days?: number;
    taxability?: string;
    exemption_details?: any;
    customer_type?: string;
    client_profile_id?: string;
    taxjar_exemption_category?: string;
    locale?: string;
    entity_code?: string;
    exempt_number?: string;
    invoice_notes?: string;
    meta_data?: any;
    fraud_flag?: string;
    consolidated_invoicing?: boolean;
  }
  export interface update_payment_method_params {
    payment_method?: payment_method_update_payment_method_params;
  }
  export interface update_billing_info_params {
    vat_number?: string;
    registered_for_gst?: boolean;
    business_customer_without_vat_number?: boolean;
    billing_address?: billing_address_update_billing_info_params;
  }
  export interface assign_payment_role_params {
    payment_source_id: string;
    role: string;
  }
  export interface add_contact_params {
    contact?: contact_add_contact_params;
  }
  export interface update_contact_params {
    contact?: contact_update_contact_params;
  }
  export interface delete_contact_params {
    contact?: contact_delete_contact_params;
  }
  export interface add_promotional_credits_params {
    amount: number;
    currency_code?: string;
    description: string;
    credit_type?: string;
    reference?: string;
  }
  export interface deduct_promotional_credits_params {
    amount: number;
    currency_code?: string;
    description: string;
    credit_type?: string;
    reference?: string;
  }
  export interface set_promotional_credits_params {
    amount: number;
    currency_code?: string;
    description: string;
    credit_type?: string;
    reference?: string;
  }
  export interface record_excess_payment_params {
    comment?: string;
    transaction?: transaction_record_excess_payment_params;
  }
  export interface collect_payment_params {
    amount?: number;
    payment_source_id?: string;
    token_id?: string;
    replace_primary_payment_source?: boolean;
    retain_payment_source?: boolean;
    payment_method?: payment_method_collect_payment_params;
    card?: card_collect_payment_params;
    payment_intent?: payment_intent_collect_payment_params;
    bank_account?: bank_account_collect_payment_params;
    invoice_allocations?: Array<invoice_allocations_collect_payment_params>;
  }
  export interface delete_params {
    delete_payment_method?: boolean;
  }
  export interface move_params {
    id_at_from_site: string;
    from_site: string;
  }
  export interface change_billing_date_params {
    billing_date?: number;
    billing_date_mode?: string;
    billing_day_of_week?: string;
    billing_day_of_week_mode?: string;
  }
  export interface merge_params {
    from_customer_id: string;
    to_customer_id: string;
  }
  export interface relationships_params {
    parent_id?: string;
    payment_owner_id?: string;
    invoice_owner_id?: string;
    use_default_hierarchy_settings?: boolean;
    parent_account_access?: parent_account_access_relationships_params;
    child_account_access?: child_account_access_relationships_params;
  }
  export interface hierarchy_params {
    hierarchy_operation_type?: string;
  }
  export interface update_hierarchy_settings_params {
    use_default_hierarchy_settings?: boolean;
    parent_account_access?: parent_account_access_update_hierarchy_settings_params;
    child_account_access?: child_account_access_update_hierarchy_settings_params;
  }
  export interface card_create_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gateway?: string;
  }
  export interface card_create_params {
    gateway_account_id?: string;
  }
  export interface card_create_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    tmp_token?: string;
  }
  export interface bank_account_create_params {
    gateway_account_id?: string;
  }
  export interface bank_account_create_params {
    iban?: string;
  }
  export interface bank_account_create_params {
    first_name?: string;
  }
  export interface bank_account_create_params {
    last_name?: string;
  }
  export interface bank_account_create_params {
    company?: string;
  }
  export interface bank_account_create_params {
    email?: string;
  }
  export interface bank_account_create_params {
    bank_name?: string;
  }
  export interface bank_account_create_params {
    account_number?: string;
  }
  export interface bank_account_create_params {
    routing_number?: string;
  }
  export interface bank_account_create_params {
    bank_code?: string;
  }
  export interface bank_account_create_params {
    account_type?: string;
  }
  export interface bank_account_create_params {
    account_holder_type?: string;
  }
  export interface bank_account_create_params {
    echeck_type?: string;
  }
  export interface bank_account_create_params {
    issuing_country?: string;
  }
  export interface bank_account_create_params {
    swedish_identity_number?: string;
  }
  export interface payment_method_create_params {
    type?: string;
  }
  export interface payment_method_create_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gateway?: string;
  }
  export interface payment_method_create_params {
    gateway_account_id?: string;
  }
  export interface payment_method_create_params {
    reference_id?: string;
  }
  export interface payment_method_create_params {
    tmp_token?: string;
  }
  export interface payment_method_create_params {
    issuing_country?: string;
  }
  export interface card_create_params {
    first_name?: string;
  }
  export interface card_create_params {
    last_name?: string;
  }
  export interface card_create_params {
    number?: string;
  }
  export interface card_create_params {
    expiry_month?: number;
  }
  export interface card_create_params {
    expiry_year?: number;
  }
  export interface card_create_params {
    cvv?: string;
  }
  export interface card_create_params {
    billing_addr1?: string;
  }
  export interface card_create_params {
    billing_addr2?: string;
  }
  export interface card_create_params {
    billing_city?: string;
  }
  export interface card_create_params {
    billing_state_code?: string;
  }
  export interface card_create_params {
    billing_state?: string;
  }
  export interface card_create_params {
    billing_zip?: string;
  }
  export interface card_create_params {
    billing_country?: string;
  }
  export interface card_create_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    ip_address?: string;
  }
  export interface payment_intent_create_params {
    id?: string;
  }
  export interface payment_intent_create_params {
    gateway_account_id?: string;
  }
  export interface payment_intent_create_params {
    gw_token?: string;
  }
  export interface payment_intent_create_params {
    reference_id?: string;
  }
  export interface payment_intent_create_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gw_payment_method_id?: string;
  }
  export interface payment_intent_create_params {
  }
  export interface billing_address_create_params {
    first_name?: string;
  }
  export interface billing_address_create_params {
    last_name?: string;
  }
  export interface billing_address_create_params {
    email?: string;
  }
  export interface billing_address_create_params {
    company?: string;
  }
  export interface billing_address_create_params {
    phone?: string;
  }
  export interface billing_address_create_params {
    line1?: string;
  }
  export interface billing_address_create_params {
    line2?: string;
  }
  export interface billing_address_create_params {
    line3?: string;
  }
  export interface billing_address_create_params {
    city?: string;
  }
  export interface billing_address_create_params {
    state_code?: string;
  }
  export interface billing_address_create_params {
    state?: string;
  }
  export interface billing_address_create_params {
    zip?: string;
  }
  export interface billing_address_create_params {
    country?: string;
  }
  export interface billing_address_create_params {
    validation_status?: string;
  }
  export interface relationship_customer_list_params {
    parent_id?: filter._string;
  }
  export interface relationship_customer_list_params {
    payment_owner_id?: filter._string;
  }
  export interface relationship_customer_list_params {
    invoice_owner_id?: filter._string;
  }
  export interface payment_method_update_payment_method_params {
    type: string;
  }
  export interface payment_method_update_payment_method_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gateway?: string;
  }
  export interface payment_method_update_payment_method_params {
    gateway_account_id?: string;
  }
  export interface payment_method_update_payment_method_params {
    reference_id?: string;
  }
  export interface payment_method_update_payment_method_params {
    tmp_token?: string;
  }
  export interface payment_method_update_payment_method_params {
    issuing_country?: string;
  }
  export interface billing_address_update_billing_info_params {
    first_name?: string;
  }
  export interface billing_address_update_billing_info_params {
    last_name?: string;
  }
  export interface billing_address_update_billing_info_params {
    email?: string;
  }
  export interface billing_address_update_billing_info_params {
    company?: string;
  }
  export interface billing_address_update_billing_info_params {
    phone?: string;
  }
  export interface billing_address_update_billing_info_params {
    line1?: string;
  }
  export interface billing_address_update_billing_info_params {
    line2?: string;
  }
  export interface billing_address_update_billing_info_params {
    line3?: string;
  }
  export interface billing_address_update_billing_info_params {
    city?: string;
  }
  export interface billing_address_update_billing_info_params {
    state_code?: string;
  }
  export interface billing_address_update_billing_info_params {
    state?: string;
  }
  export interface billing_address_update_billing_info_params {
    zip?: string;
  }
  export interface billing_address_update_billing_info_params {
    country?: string;
  }
  export interface billing_address_update_billing_info_params {
    validation_status?: string;
  }
  export interface contact_add_contact_params {
    id?: string;
  }
  export interface contact_add_contact_params {
    first_name?: string;
  }
  export interface contact_add_contact_params {
    last_name?: string;
  }
  export interface contact_add_contact_params {
    email: string;
  }
  export interface contact_add_contact_params {
    phone?: string;
  }
  export interface contact_add_contact_params {
    label?: string;
  }
  export interface contact_add_contact_params {
    enabled?: boolean;
  }
  export interface contact_add_contact_params {
    send_billing_email?: boolean;
  }
  export interface contact_add_contact_params {
    send_account_email?: boolean;
  }
  export interface contact_update_contact_params {
    id: string;
  }
  export interface contact_update_contact_params {
    first_name?: string;
  }
  export interface contact_update_contact_params {
    last_name?: string;
  }
  export interface contact_update_contact_params {
    email?: string;
  }
  export interface contact_update_contact_params {
    phone?: string;
  }
  export interface contact_update_contact_params {
    label?: string;
  }
  export interface contact_update_contact_params {
    enabled?: boolean;
  }
  export interface contact_update_contact_params {
    send_billing_email?: boolean;
  }
  export interface contact_update_contact_params {
    send_account_email?: boolean;
  }
  export interface contact_delete_contact_params {
    id: string;
  }
  export interface transaction_record_excess_payment_params {
    amount: number;
  }
  export interface transaction_record_excess_payment_params {
    currency_code?: string;
  }
  export interface transaction_record_excess_payment_params {
    date: number;
  }
  export interface transaction_record_excess_payment_params {
    payment_method: string;
  }
  export interface transaction_record_excess_payment_params {
    reference_number?: string;
  }
  export interface payment_method_collect_payment_params {
    type?: string;
  }
  export interface payment_method_collect_payment_params {
    gateway_account_id?: string;
  }
  export interface payment_method_collect_payment_params {
    reference_id?: string;
  }
  export interface payment_method_collect_payment_params {
    tmp_token?: string;
  }
  export interface card_collect_payment_params {
    gateway_account_id?: string;
  }
  export interface card_collect_payment_params {
    first_name?: string;
  }
  export interface card_collect_payment_params {
    last_name?: string;
  }
  export interface card_collect_payment_params {
    number?: string;
  }
  export interface card_collect_payment_params {
    expiry_month?: number;
  }
  export interface card_collect_payment_params {
    expiry_year?: number;
  }
  export interface card_collect_payment_params {
    cvv?: string;
  }
  export interface card_collect_payment_params {
    billing_addr1?: string;
  }
  export interface card_collect_payment_params {
    billing_addr2?: string;
  }
  export interface card_collect_payment_params {
    billing_city?: string;
  }
  export interface card_collect_payment_params {
    billing_state_code?: string;
  }
  export interface card_collect_payment_params {
    billing_state?: string;
  }
  export interface card_collect_payment_params {
    billing_zip?: string;
  }
  export interface card_collect_payment_params {
    billing_country?: string;
  }
  export interface payment_intent_collect_payment_params {
    id?: string;
  }
  export interface payment_intent_collect_payment_params {
    gateway_account_id?: string;
  }
  export interface payment_intent_collect_payment_params {
    gw_token?: string;
  }
  export interface payment_intent_collect_payment_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gw_payment_method_id?: string;
  }
  export interface payment_intent_collect_payment_params {
    reference_id?: string;
  }
  export interface bank_account_collect_payment_params {
  }
  export interface bank_account_collect_payment_params {
  }
  export interface bank_account_collect_payment_params {
  }
  export interface bank_account_collect_payment_params {
  }
  export interface bank_account_collect_payment_params {
  }
  export interface bank_account_collect_payment_params {
  }
  export interface bank_account_collect_payment_params {
  }
  export interface bank_account_collect_payment_params {
  }
  export interface bank_account_collect_payment_params {
  }
  export interface bank_account_collect_payment_params {
  }
  export interface bank_account_collect_payment_params {
  }
  export interface bank_account_collect_payment_params {
  }
  export interface bank_account_collect_payment_params {
  }
  export interface bank_account_collect_payment_params {
  }
  export interface bank_account_collect_payment_params {
  }
  export interface invoice_allocations_collect_payment_params {
    invoice_id?: string;
  }
  export interface invoice_allocations_collect_payment_params {
    allocation_amount?: number;
  }
  export interface parent_account_access_relationships_params {
    portal_edit_child_subscriptions?: string;
  }
  export interface parent_account_access_relationships_params {
    portal_download_child_invoices?: string;
  }
  export interface parent_account_access_relationships_params {
    send_subscription_emails?: boolean;
  }
  export interface parent_account_access_relationships_params {
    send_payment_emails?: boolean;
  }
  export interface parent_account_access_relationships_params {
    send_invoice_emails?: boolean;
  }
  export interface child_account_access_relationships_params {
    portal_edit_subscriptions?: string;
  }
  export interface child_account_access_relationships_params {
    portal_download_invoices?: string;
  }
  export interface child_account_access_relationships_params {
    send_subscription_emails?: boolean;
  }
  export interface child_account_access_relationships_params {
    send_payment_emails?: boolean;
  }
  export interface child_account_access_relationships_params {
    send_invoice_emails?: boolean;
  }
  export interface parent_account_access_update_hierarchy_settings_params {
    portal_edit_child_subscriptions?: string;
  }
  export interface parent_account_access_update_hierarchy_settings_params {
    portal_download_child_invoices?: string;
  }
  export interface parent_account_access_update_hierarchy_settings_params {
    send_subscription_emails?: boolean;
  }
  export interface parent_account_access_update_hierarchy_settings_params {
    send_payment_emails?: boolean;
  }
  export interface parent_account_access_update_hierarchy_settings_params {
    send_invoice_emails?: boolean;
  }
  export interface child_account_access_update_hierarchy_settings_params {
    portal_edit_subscriptions?: string;
  }
  export interface child_account_access_update_hierarchy_settings_params {
    portal_download_invoices?: string;
  }
  export interface child_account_access_update_hierarchy_settings_params {
    send_subscription_emails?: boolean;
  }
  export interface child_account_access_update_hierarchy_settings_params {
    send_payment_emails?: boolean;
  }
  export interface child_account_access_update_hierarchy_settings_params {
    send_invoice_emails?: boolean;
  }
}
