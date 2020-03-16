/*
* This program and the accompanying materials are made available under the terms of the *
* Eclipse Public License v2.0 which accompanies this distribution, and is available at *
* https://www.eclipse.org/legal/epl-v20.html                                      *
*                                                                                 *
* SPDX-License-Identifier: EPL-2.0                                                *
*                                                                                 *
* Copyright Contributors to the Zowe Project.                                     *
*                                                                                 *
*/

import { IconHierarchyType, IconId, IIconItem } from "../index";
import { getIconPathInResources } from "../../../utils/icon";
import * as extension from "../../../extension";

const icon: IIconItem = {
    id: IconId.folder,
    type: IconHierarchyType.base,
    path: getIconPathInResources("folder-closed.svg"),
    check: (node) => {
        const contexts = [
            extension.DS_PDS_CONTEXT,
            extension.DS_PDS_CONTEXT + extension.FAV_SUFFIX,
            extension.USS_DIR_CONTEXT,
            extension.USS_DIR_CONTEXT + extension.FAV_SUFFIX,
            extension.JOBS_JOB_CONTEXT,
            extension.JOBS_JOB_CONTEXT + extension.FAV_SUFFIX];
        return contexts.indexOf(node.contextValue) > -1;
    }
};

export default icon;
