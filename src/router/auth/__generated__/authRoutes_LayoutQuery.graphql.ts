/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type Layout_me$ref = any;
export type authRoutes_LayoutQueryVariables = {};
export type authRoutes_LayoutQueryResponse = {
    readonly me: {
        readonly id: string;
        readonly " $fragmentRefs": Layout_me$ref;
    } | null;
};
export type authRoutes_LayoutQuery = {
    readonly response: authRoutes_LayoutQueryResponse;
    readonly variables: authRoutes_LayoutQueryVariables;
};



/*
query authRoutes_LayoutQuery {
  me {
    id
    ...Layout_me
  }
}

fragment Layout_me on User {
  id
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "authRoutes_LayoutQuery",
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
          (v0/*: any*/),
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
    "name": "authRoutes_LayoutQuery",
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
          (v0/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "authRoutes_LayoutQuery",
    "id": null,
    "text": "query authRoutes_LayoutQuery {\n  me {\n    id\n    ...Layout_me\n  }\n}\n\nfragment Layout_me on User {\n  id\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '7c3d13aa61e5a7b1d8491e348e965778';
export default node;
