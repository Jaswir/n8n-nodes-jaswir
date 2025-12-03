import {
    IAuthenticateGeneric,
    ICredentialType,
    INodeProperties,
    ICredentialTestRequest,
    Icon,
} from 'n8n-workflow';

export class NasaPicsApi implements ICredentialType {
    name = 'nasaPicsApi';
    displayName = 'NASA Pics API';
    icon = 'file:nasapics.svg' as Icon;
    // Uses the link to this tutorial as an example
    // Replace with your own docs links when building your own nodes
    documentationUrl = 'https://docs.n8n.io/integrations/creating-nodes/build/declarative-style-node/';
    properties: INodeProperties[] = [
        {
            displayName: 'API Key',
            name: 'apiKey',
            type: 'string',
            typeOptions: {
                password: true,
            },
            default: '',
        },
    ];
    authenticate: IAuthenticateGeneric = {
        type: 'generic',
        properties: {
            qs: {
                'api_key': '={{$credentials.apiKey}}'
            }
        },
    };

    test: ICredentialTestRequest = {
        request: {
            baseURL: 'https://api.nasa.gov',
            url: '/planetary/apod',
            qs: {
                api_key: '={{$credentials.apiKey}}',
            },
        },
    };
}