import { Credentials } from 'aws-sdk/global';
import { ClientOptions } from '@elastic/elasticsearch';
export declare function createAWSConnection(awsCredentials: Credentials): ClientOptions;
export declare const awsGetCredentials: () => Promise<Credentials>;
