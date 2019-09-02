/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type Layout_me$ref = any;
export type publicRoutes_LayoutQueryVariables = {};
export type publicRoutes_LayoutQueryResponse = {
    readonly me: {
        readonly id: string;
        readonly " $fragmentRefs": Layout_me$ref;
    } | null;
};
export type publicRoutes_LayoutQuery = {
    readonly response: publicRoutes_LayoutQueryResponse;
    readonly variables: publicRoutes_LayoutQueryVariables;
};



/*
query publicRoutes_LayoutQuery {
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
    "name": "publicRoutes_LayoutQuery",
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
    "name": "publicRoutes_LayoutQuery",
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
    "name": "publicRoutes_LayoutQuery",
    "id": null,
    "text": "query publicRoutes_LayoutQuery {\n  me {\n    id\n    ...Layout_me\n  }\n}\n\nfragment Layout_me on User {\n  id\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '38928c16e7c7c59918f29b5bbf1600f3';
export default node;
