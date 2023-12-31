// import { Account__Output } from "../services/interfaces/accounts/Account";
// import { AccountRequest } from "../services/interfaces/accounts/AccountRequest";
// import { AccountsRequest } from "../services/interfaces/accounts/AccountsRequest";
// import { AccountsResponse__Output } from "../services/interfaces/accounts/AccountsResponse";
// import { DbServiceClient } from "../services/interfaces/db/DbService";
// import { EmptyRequest } from "../services/interfaces/db/EmptyRequest";
// import { ResponseTest__Output } from "../services/interfaces/db/ResponseTest";
// import { AccountsEventResponse__Output } from "../services/interfaces/events/AccountsEventResponse";
// import { AccountsLastEventResponse__Output } from "../services/interfaces/events/AccountsLastEventResponse";
// import { EventWOAccountResponse__Output } from "../services/interfaces/events/EventWOAccountResponse";
// import { EventsGrouprequest } from "../services/interfaces/events/EventsGrouprequest";
// import { EventsRequest } from "../services/interfaces/events/EventsRequest";
// import { EventsWOAccountRequest } from "../services/interfaces/events/EventsWOAccountRequest";
// import { GroupsEventsResponse__Output } from "../services/interfaces/events/GroupsEventsResponse";
// import { GroupsLastEventResponse__Output } from "../services/interfaces/events/GroupsLastEventResponse";
// import { LastEventGroupRequest } from "../services/interfaces/events/LastEventGroupRequest";
// import { LastEventRequest } from "../services/interfaces/events/LastEventRequest";
// import { Group__Output } from "../services/interfaces/groups/Group";
// import { GroupRequestFilter } from "../services/interfaces/groups/GroupRequestFilter";
// import { ResponseGroups__Output } from "../services/interfaces/groups/ResponseGroups";
// import { SearchRequestGroup } from "../services/interfaces/groups/SearchRequestGroup";
import { Account__Output } from '../services/accounts/Account';
import { AccountRequest } from '../services/accounts/AccountRequest';
import { AccountsRequest } from '../services/accounts/AccountsRequest';
import { AccountsResponse__Output } from '../services/accounts/AccountsResponse';
import { ResponseAlarms__Output } from '../services/catalogue/ResponseAlarms';
import { ResponseEvents__Output } from '../services/catalogue/ResponseEvents';
import { DbServiceClient } from '../services/db/DbService';
import { EmptyRequest } from '../services/db/EmptyRequest';
import { ResponseTest__Output } from '../services/db/ResponseTest';
import { AccountsEventResponse__Output } from '../services/events/AccountsEventResponse';
import { AccountsLastEventResponse__Output } from '../services/events/AccountsLastEventResponse';
import { EventWOAccountResponse__Output } from '../services/events/EventWOAccountResponse';
import { EventsGrouprequest } from '../services/events/EventsGrouprequest';
import { EventsRequest } from '../services/events/EventsRequest';
import { EventsWOAccountRequest } from '../services/events/EventsWOAccountRequest';
import { GroupsEventsResponse__Output } from '../services/events/GroupsEventsResponse';
import { GroupsLastEventResponse__Output } from '../services/events/GroupsLastEventResponse';
import { LastEventGroupRequest } from '../services/events/LastEventGroupRequest';
import { LastEventRequest } from '../services/events/LastEventRequest';
import { Group__Output } from '../services/groups/Group';
import { GroupRequestFilter } from '../services/groups/GroupRequestFilter';
import { ResponseGroups__Output } from '../services/groups/ResponseGroups';
import { SearchRequestGroup } from '../services/groups/SearchRequestGroup';

export class Data{

    private client: DbServiceClient;

    constructor(client: DbServiceClient){
        this.client = client;
    }

    searchGroups(query: SearchRequestGroup){
        return new Promise<ResponseGroups__Output>((resolve, reject) => {
            this.client.searchGroups(query, (err, data) => {
                if (err) {
                    console.log(err);
                    
                    return reject(this.hanldeError(err));
                }
                return resolve(data!);
            })
        });
    }

    testService(query: EmptyRequest){
        return new Promise<ResponseTest__Output>((resolve, reject) => {
            this.client.test(query, (err, data) => {
                if (err) {
                    console.log(err);

                    return reject(this.hanldeError(err));
                }
                return resolve(data!);
            })
        });
    }

    searchAccounts(query: AccountsRequest) {
        return new Promise<AccountsResponse__Output>((resolve, reject) => {
            this.client.searchAccounts(query, (err, data) => {
                if (err) return reject(this.hanldeError(err));
                return resolve(data!);
            })
        });
    }

    findOneAccount(query: AccountRequest){
        return new Promise<Account__Output>((resolve, reject) => {
            this.client.findOneAccount(query, (err, data) => {
                if (err) return reject(this.hanldeError(err));
                return resolve(data!);
            })
        });
    }

    findOneGroup(query: GroupRequestFilter) {
        return new Promise<Group__Output>((resolve, reject) => {
            this.client.findOneGroup(query, (err, data) => {
                if (err) return reject(this.hanldeError(err));
                return resolve(data!);
            })
        });
    }

    getEventsFromGroup(query: EventsGrouprequest) {
        return new Promise<GroupsEventsResponse__Output>((resolve, reject) => {
            this.client.getEventsFromGroup(query, (err, data) => {
                if (err) return reject(this.hanldeError(err));
                return resolve(data!);
            })
        });
    }

    getEventsWithAccounts(query: EventsRequest) {
        return new Promise<AccountsEventResponse__Output>((resolve, reject) => {
            this.client.getEventsWithAccounts(query, (err, data) => {
                if (err) return reject(this.hanldeError(err));
                return resolve(data!);
            })
        });
    }

    getEventsWithOutAccounts(query: EventsWOAccountRequest) {
        return new Promise<EventWOAccountResponse__Output>((resolve, reject) => {
            this.client.getEventsWithOutAccounts(query, (err, data) => {
                if (err) return reject(this.hanldeError(err));
                return resolve(data!);
            })
        });
    }

    getLasEventFromAccount(query: LastEventRequest) {
        return new Promise<AccountsLastEventResponse__Output>((resolve, reject) => {
            this.client.getLasEventFromAccount(query, (err, data) => {
                if (err) return reject(this.hanldeError(err));
                return resolve(data!);
            })
        });
    }

    getLastEventFromGroup(query: LastEventGroupRequest) {
        return new Promise<GroupsLastEventResponse__Output>((resolve, reject) => {
            this.client.getLastEventFromGroup(query, (err, data) => {
                if (err) return reject(this.hanldeError(err));
                return resolve(data!);
            })
        });
    }

    getCatalogueAlarms(query: EmptyRequest) {
        return new Promise<ResponseAlarms__Output>((resolve, reject) => {
            this.client.getCatalogueAlarms(query, (err, data) => {
                if (err) return reject(this.hanldeError(err));
                return resolve(data!);
            })
        });
    }

    getCatalogueEvents(query: EmptyRequest) {
        return new Promise<ResponseEvents__Output>((resolve, reject) => {
            this.client.getCatalogueEvents(query, (err, data) => {
                if (err) return reject(this.hanldeError(err));
                return resolve(data!);
            })
        });
    }

    private hanldeError(error: any){
        if (error.details) {
            return error.details;
        }
        console.error(error);
        return 'Error no controlado verifica los logs';
    }

}