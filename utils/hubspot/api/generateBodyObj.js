import { contactProperties, geoContactProperties, meetingAssociations, meetingProperties } from "./populationProperties";

export const generateBody = (start, end, after, defaultQueryFilter, hsObject) => {
    let body = {};
    body.limit = 100;
    body.after = after;

    if (hsObject === 'contacts') {
        body.sorts = [
            {
                "propertyName": "createdate",
                "direction": "ASCENDING"
            }
        ];

        body.properties = contactProperties;

        if (start && end) {
            body.filterGroups = [
                {
                    "filters": [
                        {
                            "propertyName": 'hubspot_owner_assigneddate',
                            "operator": "BETWEEN",
                            "value": start,
                            "highValue": end
                        },
                    ]
                },
                {
                    "filters": [
                        {
                            "propertyName": 'createdate',
                            "operator": "BETWEEN",
                            "value": start,
                            "highValue": end
                        }
                    ]
                }
            ]
        } else {
            body.filterGroups = [
                {
                    "filters": [
                        {
                            "propertyName": 'createdate',
                            "operator": "GT",
                            "value": defaultQueryFilter
                        }
                    ]
                },
                {
                    "filters": [
                        {
                            "propertyName": 'hubspot_owner_assigneddate',
                            "operator": "GT",
                            "value": defaultQueryFilter
                        }
                    ]
                }
            ]
        }
    } else {
        body.sorts = [
            {
                "propertyName": "hs_createdate",
                "direction": "ASCENDING"
            }
        ];

        body.properties = meetingProperties;
        body.associations = meetingAssociations;

        if (start && end) {
            body.filterGroups = [{
                "filters": [
                    {
                        "propertyName": "hs_createdate",
                        "operator": "BETWEEN",
                        "value": start,
                        "highValue": end
                    }
                ]
            }]
        } else {
            body.filterGroups = [{
                "filters": [
                    {
                        "propertyName": "hs_createdate",
                        "operator": "GT",
                        "value": defaultQueryFilter
                    }
                ]
            }]
        }
    }
    
    return body;
};

export const generateGeoContactsBody = (start, end, after, defaultQueryFilter, hsObject) => {
    let body = {};
    body.limit = 100;
    body.after = after;

    if (hsObject === 'contacts') {
        body.sorts = [
            {
                "propertyName": "createdate",
                "direction": "ASCENDING"
            }
        ];

        body.properties = geoContactProperties;

        if (start && end) {
            body.filterGroups = [
                {
                    "filters": [
                        {
                            "propertyName": 'hubspot_owner_assigneddate',
                            "operator": "BETWEEN",
                            "value": start,
                            "highValue": end
                        },
                    ]
                },
                {
                    "filters": [
                        {
                            "propertyName": 'createdate',
                            "operator": "BETWEEN",
                            "value": start,
                            "highValue": end
                        }
                    ]
                }
            ]
        } else {
            body.filterGroups = [
                {
                    "filters": [
                        {
                            "propertyName": 'createdate',
                            "operator": "GT",
                            "value": defaultQueryFilter
                        }
                    ]
                },
                {
                    "filters": [
                        {
                            "propertyName": 'hubspot_owner_assigneddate',
                            "operator": "GT",
                            "value": defaultQueryFilter
                        }
                    ]
                }
            ]
        }
    }
    
    return body;
};