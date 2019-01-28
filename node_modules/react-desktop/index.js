'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Window = exports.View = exports.ToolbarNavItem = exports.ToolbarNav = exports.Toolbar = exports.TitleBar = exports.TextInput = exports.Text = exports.SegmentedControlItem = exports.SegmentedControl = exports.SearchField = exports.Radio = exports.ProgressCircle = exports.Pin = exports.NavPaneItem = exports.NavPane = exports.MasterDetailsViewItemDetails = exports.MasterDetailsViewItemMaster = exports.MasterDetailsViewItem = exports.MasterDetailsView = exports.ListViewSeparator = exports.ListViewSectionHeader = exports.ListViewSection = exports.ListViewRow = exports.ListViewHeader = exports.ListViewFooter = exports.ListView = exports.Link = exports.Label = exports.Dialog = exports.Checkbox = exports.Button = exports.Box = exports.os = undefined;

var _os = require('./src/os');

Object.defineProperty(exports, 'os', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_os).default;
  }
});

var _os2 = _interopRequireDefault(_os);

var _windows = require('./windows');

var windows = _interopRequireWildcard(_windows);

var _macOs = require('./macOs');

var macOs = _interopRequireWildcard(_macOs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var os = (0, _os2.default)();
var select = function select(macOs, windows) {
  return os === _os.MACOS ? macOs : windows;
};

var Box = exports.Box = macOs.Box;
var Button = exports.Button = select(macOs.Button, windows.Button);
var Checkbox = exports.Checkbox = select(macOs.Checkbox, windows.Checkbox);

var Dialog = exports.Dialog = macOs.Dialog;
var Label = exports.Label = select(macOs.Label, windows.Label);
var Link = exports.Link = macOs.Link;
var ListView = exports.ListView = macOs.ListView;
var ListViewFooter = exports.ListViewFooter = macOs.ListViewFooter;
var ListViewHeader = exports.ListViewHeader = macOs.ListViewHeader;
var ListViewRow = exports.ListViewRow = macOs.ListViewRow;
var ListViewSection = exports.ListViewSection = macOs.ListViewSection;
var ListViewSectionHeader = exports.ListViewSectionHeader = macOs.ListViewSectionHeader;
var ListViewSeparator = exports.ListViewSeparator = macOs.ListViewSeparator;
var MasterDetailsView = exports.MasterDetailsView = windows.MasterDetailsView;
var MasterDetailsViewItem = exports.MasterDetailsViewItem = windows.MasterDetailsViewItem;
var MasterDetailsViewItemMaster = exports.MasterDetailsViewItemMaster = windows.MasterDetailsViewItemMaster;
var MasterDetailsViewItemDetails = exports.MasterDetailsViewItemDetails = windows.MasterDetailsViewItemDetails;
var NavPane = exports.NavPane = windows.NavPane;
var NavPaneItem = exports.NavPaneItem = windows.NavPaneItem;
var Pin = exports.Pin = macOs.Pin;
var ProgressCircle = exports.ProgressCircle = select(macOs.ProgressCircle, windows.ProgressCircle);
var Radio = exports.Radio = select(macOs.Radio, windows.Radio);
var SearchField = exports.SearchField = macOs.SearchField;
var SegmentedControl = exports.SegmentedControl = macOs.SegmentedControl;
var SegmentedControlItem = exports.SegmentedControlItem = macOs.SegmentedControlItem;
var Text = exports.Text = select(macOs.Text, windows.Text);
var TextInput = exports.TextInput = select(macOs.TextInput, windows.TextInput);
var TitleBar = exports.TitleBar = select(macOs.TitleBar, windows.TitleBar);
var Toolbar = exports.Toolbar = macOs.Toolbar;
var ToolbarNav = exports.ToolbarNav = macOs.ToolbarNav;
var ToolbarNavItem = exports.ToolbarNavItem = macOs.ToolbarNavItem;
var View = exports.View = select(macOs.View, windows.View);
var Window = exports.Window = select(macOs.Window, windows.Window);
