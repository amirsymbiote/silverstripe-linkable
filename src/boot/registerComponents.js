import Injector from 'lib/Injector';
import LinkField from 'components/LinkField/LinkField';

export default () => {
  Injector.component.registerMany({
    LinkField
  });
};
