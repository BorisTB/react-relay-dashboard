/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type Layout_me$ref = any;
export type routes_LayoutQueryVariables = {};
export type routes_LayoutQueryResponse = {
    readonly me: {
        readonly " $fragmentRefs": Layout_me$ref;
    } | null;
};
export type routes_LayoutQuery = {
    readonly response: routes_LayoutQueryResponse;
    readonly variables: routes_LayoutQueryVariables;
};



/*
query routes_LayoutQuery {
  me {
    ...Layout_me
    id
  }
}

fragment Layout_me on User {
  id
}
*/

const node: ConcreteRequest = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "routes_LayoutQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "me",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Layout_me",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "routes_LayoutQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "me",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "routes_LayoutQuery",
    "id": null,
    "text": "query routes_LayoutQuery {\n  me {\n    ...Layout_me\n    id\n  }\n}\n\nfragment Layout_me on User {\n  id\n}\n",
    "metadata": {}
  }
};
(node as any).hash = 'e3e7cbccdd4b6216093bbe74ef2cf5f9';
export default node;
