import {opServicesModule, opWorkPackagesModule} from 'core-app/angular-modules';
import {SchemaCacheService} from 'core-components/schemas/schema-cache.service';
import {WorkPackageCacheService} from 'core-components/work-packages/work-package-cache.service';
import {WorkPackageDisplayFieldService} from 'core-components/wp-display/wp-display-field/wp-display-field.service';
import {WorkPackageEditFieldService} from 'core-components/wp-edit/wp-edit-field/wp-edit-field.service';
import {WorkPackageTableRefreshService} from 'core-components/wp-table/wp-table-refresh-request.service';
import {ExternalQueryConfigurationService} from "core-components/wp-table/external-configuration/external-query-configuration.service";

class Ng1WorkPackageCacheService extends WorkPackageCacheService {
}

class Ng1SchemaCacheService extends SchemaCacheService {
}

class Ng1WorkPackageTableRefreshService extends WorkPackageTableRefreshService {
}

class Ng1WorkPackageDisplayFieldService extends WorkPackageDisplayFieldService {
}

class Ng1WorkPackageEditFieldService extends WorkPackageEditFieldService {
}

class Ng1ExternalQueryConfigurationService extends ExternalQueryConfigurationService {
}


angular
  .module('openproject')
  .service('wpDisplayField', Ng1WorkPackageDisplayFieldService);
angular
  .module('openproject')
  .service('wpEditField', Ng1WorkPackageEditFieldService);
opWorkPackagesModule.service('wpCacheService', Ng1WorkPackageCacheService);
opWorkPackagesModule.service('schemaCacheService', Ng1SchemaCacheService);
opServicesModule.service('wpTableRefresh', Ng1WorkPackageTableRefreshService);
opServicesModule.service('externalQueryConfiguration', Ng1ExternalQueryConfigurationService);